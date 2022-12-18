import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAm_cG38CpklPABW02j-xpeo3VSEoI0WAg",
  authDomain: "pokedex-aimonkey.firebaseapp.com",
  projectId: "pokedex-aimonkey",
  storageBucket: "pokedex-aimonkey.appspot.com",
  messagingSenderId: "237552477964",
  appId: "1:237552477964:web:19a00c0636621a77a94b29",
  measurementId: "G-1EKGJ523K4",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.auth();
};

const provider = new firebase.auth.GoogleAuthProvider()

const authFunc = firebase.auth();

export { authFunc, provider };
