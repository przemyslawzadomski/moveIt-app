import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";

import "./SignUp.css";
import User from "./user.svg";
import Truck from "./truck.svg";
import firebase from "firebase";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  company: "",
  phone: "",
  isCarrier: false,
  error: null,
  success: null
};
class SignUp extends Component {
  state = initialState;

  componentDidMount() {
    this.setState({
      state: initialState
    });
  }

  changeRoleToUser = () =>
    this.setState({
      isCarrier: false
    });
  changeRoleToCarrier = () =>
    this.setState({
      isCarrier: true
    });

  handleChange = event => {
    const fieldName = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({
      [fieldName]: value
    });
  };

  // signUpWithGoogle (){
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //   .auth()
  //   .signInWithPopup(provider)
  //   .then(function(result){
  //     console.log(result);
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        firebase
          .database()
          .ref("users")
          .child(userId)
          .set({
            name: this.state.name,
            surname: this.state.surname,
            company: this.state.company,
            phone: this.state.phone,
            isCarrier: this.state.isCarrier
          });
        this.setState({
          ...initialState,
          error: null,
          success: "Konto zostało założone"
        });
      })
      .catch(error => this.setState({ error: error, success: null }));
  };

  disableSubmit = event => {
    event.preventDefault();
  }

  render() {
    console.log(this.props.history)
    const {
      name,
      surname,
      phone,
      isCarrier,
      company,
      email,
      password,
      error,
      success
    } = this.state;
    const errors = {
      invalidEmail: "Niepoprawny adres e-mail.",
      weakPassword:
        "Niepoprawne hasło. Hasło powinno mieć conajmniej 6 znaków.",
      emailAlreadyInUse: "Istnieje już konto o takim adresie e-mail.",
      other: "Coś poszło nie tak. Spóbuj ponownie za chwilę"
    };
    return (
      <div className="Width_480px">
        {success ? (
          <>
            <div className="sign-up_root disabled">
              <Header />

              <div className="sign-up_main">
                <div className="sign-up_welcome-message">
                  <h1>Zarejestruj się!</h1>
                  <p>Do czego chcesz użyć</p>
                  <span>moveIt</span>
                </div>
                <p className="sign-up_pick-role">Wybierz swoją rolę: *</p>
                <form onSubmit={this.disableSubmit}>
                  <div className="sign-up_checkboxes">
                    <input
                      id="user"
                      name="user-type"
                      type="radio"
                      onChange={this.changeRoleToUser}
                      required
                    />
                    <label htmlFor="user">
                      <img
                        src={User}
                        alt={"user icon"}
                        style={{ width: "100px", height: "100px" }}
                      />
                      Chcę się przeprowadzić
                    </label>

                    <input
                      id="carrier"
                      name="user-type"
                      type="radio"
                      
                    />
                    <label htmlFor="carrier">
                      <img
                        src={Truck}
                        alt={"truck icon"}
                        style={{ width: "100px", height: "100px" }}
                      />
                      Chcę pomóc innym w przeprowadzce
                    </label>
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    
                    placeholder="Imię *"
                    value={name}
                    required
                  />

                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    
                    placeholder="Nazwisko *"
                    value={surname}
                    required
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    
                    placeholder="Telefon *"
                    value={phone}
                    required
                  />

                  {isCarrier ? (
                    <>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        
                        placeholder="Nazwa firmy"
                        value={company}
                      />
                    </>
                  ) : null}

                  <input
                    id="email"
                    name="email"
                    type="email"
                    
                    placeholder="E-mail *"
                    value={email}
                  />

                  <input
                    type="password"
                    id="password"
                    name="password"
                    
                    placeholder="Hasło *"
                    value={password}
                  />
                  <p style={{ color: "white", fontSize: 12 }}>
                    * - pola obowiązkowe
                  </p>
                  <button>ZAREJESTRUJ SIĘ</button>
                  {/* <button onClick={this.signUpWithGoogle}>Zarejestruj się z Google</button> */}
                </form>
                <div className="sign-up_sign-in">
                  <p>
                    Mam już konto. Zaloguj mnie!
                  </p>
                </div>
              </div>
              <Footer />
            </div>

            <div className="sign-up_success">
              <p>Twoja rejestracja w <span>MoveIt </span>powiodła się!</p>
              <p>Twoje konto jest aktywne i możesz korzystać z aplikacji.</p>
              <button onClick={() => this.props.history.push("/myAccount")}>
                Przejdź do swojego konta
              </button>
            </div>
          </>
        ) : <div className="sign-up_root">
        <Header />

        <div className="sign-up_main">
          <div className="sign-up_welcome-message">
            <h1>Zarejestruj się!</h1>
            <p>Do czego chcesz użyć</p>
            <span>moveIt</span>
          </div>
          <p className="sign-up_pick-role">Wybierz swoją rolę: *</p>
          <form onSubmit={this.handleSubmit}>
            <div className="sign-up_checkboxes">
              <input
                id="user"
                name="user-type"
                type="radio"
                onChange={this.changeRoleToUser}
                required
              />
              <label htmlFor="user">
                <img
                  src={User}
                  alt={"user icon"}
                  style={{ width: "100px", height: "100px" }}
                />
                Chcę się przeprowadzić
              </label>

              <input
                id="carrier"
                name="user-type"
                type="radio"
                onChange={this.changeRoleToCarrier}
              />
              <label htmlFor="carrier">
                <img
                  src={Truck}
                  alt={"truck icon"}
                  style={{ width: "100px", height: "100px" }}
                />
                Chcę pomóc innym w przeprowadzce
              </label>
            </div>
            <input
              id="name"
              name="name"
              type="text"
              onChange={this.handleChange}
              placeholder="Imię *"
              value={name}
              required
            />

            <input
              id="surname"
              name="surname"
              type="text"
              onChange={this.handleChange}
              placeholder="Nazwisko *"
              value={surname}
              required
            />

            <input
              id="phone"
              name="phone"
              type="text"
              onChange={this.handleChange}
              placeholder="Telefon *"
              value={phone}
              required
            />

            {isCarrier ? (
              <>
                <input
                  id="company"
                  name="company"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Nazwa firmy"
                  value={company}
                />
              </>
            ) : null}

            <input
              id="email"
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder="E-mail *"
              value={email}
            />

            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
              placeholder="Hasło *"
              value={password}
            />
            <p style={{ color: "white", fontSize: 12 }}>
              * - pola obowiązkowe
            </p>
            <button>ZAREJESTRUJ SIĘ</button>
            {/* <button onClick={this.signUpWithGoogle}>Zarejestruj się z Google</button> */}
          </form>
          <div className="sign-up_sign-in">
            <p>
              Mam już konto. <NavLink to="/signin">Zaloguj mnie!</NavLink>
            </p>
          </div>
          {error ? (
            <p className="sign-up_error">
              {error.code === "auth/invalid-email"
                ? errors.invalidEmail
                : error.code === "auth/weak-password"
                ? errors.weakPassword
                : error.code === "auth/email-already-in-use"
                ? errors.emailAlreadyInUse
                : errors.other}
            </p>
          ) : null}
        </div>
        <Footer />
      </div>}
        
      </div>
    );
  }
}
export default SignUp;
