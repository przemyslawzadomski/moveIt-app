import firebase from 'firebase';



export const getUserPromise = () =>
  firebase
    .database()
    .ref('users')
    .once('value')
    .then(snapshot => snapshot.val())
    .then(data =>
      Object.entries(data || {}).map(([id, value]) => ({
        id,
        ...value,
      }))
    );



export const updateUserPromise = (id, company, name, surname, email, phone) =>
  firebase
    .database()
    .ref('users')
    .child(id)
    .update({
      company,
      name, 
      surname, 
      email, 
      phone
    });





