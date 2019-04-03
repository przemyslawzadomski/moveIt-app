import React, { Component } from 'react';
import firebase from 'firebase';
import { getUsersPromise, getOffersPromise, getAuctionsPromise, getCommentsPromise } from '../serivices';

// The argument passed to `createContext` is being used only
// if given context provider is not available within VDOM
// tree above the Consumer.
export const authContext = React.createContext({ user: null });
const { Provider, Consumer } = authContext;

export default class AuthContextProvider extends Component {
  state = {
    user: null,
    signOut: () => firebase.auth().signOut(),
    signIn: (email, password) => firebase.auth().signInWithEmailAndPassword(email, password),
    originalUsers:[],
    users: [],
    offers: [],
    auctions: [],
    comments: [],
    getIsCarrier: null
  };

  componentDidMount() {
    this.unsubscribe = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ user }));

      firebase
      .database()
      .ref("auctions").on('value', snapshot =>{
      const data = snapshot.val()
        this.setState({
          auctions: Object.entries(data).map(([id, value]) => ({
            auctionId: id,
            ...value
          }))
        })
      });
      firebase
      .database()
      .ref("offers").on('value', snapshot =>{
      const data = snapshot.val()
        this.setState({
          offers: Object.entries(data).map(([id, value]) => ({
            offerId: id,
            ...value
          }))
        })
      });
      firebase
      .database()
      .ref("users").on("value", snapshot =>{
        const data = snapshot.val()
        if (data === null) {
          return;
        }
        this.setState({
          originalUsers: data,
          users: Object.entries(data || {}).map(([id, value]) => ({
            id,
            ...value
          }))
        })
      })
        
        
      getCommentsPromise().then(data =>
        this.setState({
          comments: Object.entries(data).map(([id, value]) => ({
            id,
            ...value
          }))
        })
      );
      this.setState({
        getIsCarrier: () => {
          const { originalUsers, user } = this.state
          return user && originalUsers && originalUsers[user.uid] && originalUsers[user.uid].isCarrier || false
        }
      })
     
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

// HOC - Higher Order Component
export const withAuth = Component => props => (
  <Consumer>
    {(value) => (
      <Component {...props} authContext={value} />
    )}
  </Consumer>
);
