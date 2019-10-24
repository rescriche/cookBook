import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseConfig from './firebaseConfig';

import Header from './components/Header/Header'
import ListOverview from './components/ListOverview/ListOverview'
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends Component {

  render() {
      const {
          user,
          signOut,
          signInWithGoogle,
      } = this.props;

    return (
        <div className="App">
            <BrowserRouter>
                    <Header user={user} signOut={signOut} signInWithGoogle={signInWithGoogle} />
                    <Switch>
                        <Route exact path="/" component={ListOverview} />
                        {/*<Route component={NotFound} />*/}
                    </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);
