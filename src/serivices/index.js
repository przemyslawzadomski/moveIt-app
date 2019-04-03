import firebase from "firebase";

export const getUsersPromise = () =>
  firebase
    .database()
    .ref("users")
    .once("value")
    .then(snapshot => snapshot.val());

export const getAuctionsPromise = () =>
  firebase
    .database()
    .ref("auctions")
    .once("value")
    .then(snapshot => snapshot.val());

export const getOffersPromise = () =>
  firebase
    .database()
    .ref("offers")
    .once("value")
    .then(snapshot => snapshot.val());

export const getCommentsPromise = () =>
  firebase
    .database()
    .ref("comments")
    .once("value")
    .then(snapshot => snapshot.val())
    
