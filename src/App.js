import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase, { provider, auth } from './firebase';

import Header from './components/Header/Header';
import SatunnainenResepti from './components/Satunnainenresepti/SatunnainenResepti';
import Profile from './components/Profile/Profile';
import Reseptit from './components/Reseptit/Reseptit';
import LisaaResepti from './components/LisaaResepti/LisaaResepti';
import Menu from './components/Menu/Menu';
import EditReciept from './components/EditReciept/EditReciept';
import Content from './components/Content/Content';
import Button from './components/buttons';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: null,
      error: null,
    };

    this.dbRef = firebase.firestore();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handeleDeleteReciept = this.handeleDeleteReciept.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
        });
        this.refData = this.dbRef
          .collection('users')
          .doc(user.uid)
          .collection('data');
        this.unsubscribe = this.refData
          .orderBy('pv', 'desc')
          .onSnapshot((docs) => {
            let data = [];
            docs.forEach((doc) => {
              let docdata = doc.data();
              data.push(docdata);
            });
            this.setState({
              data: data,
            });
          });
      }
    });
  }
  //Käsittelee ja tallentaa datan tietokantaan
  handleFormSubmit(newdata) {
    this.refData.doc(newdata.id).set(newdata);
  }
  //Poistaa datan tietokannasta
  handeleDeleteReciept(id) {
    this.refData
      .doc(id)
      .delete()
      .then()
      .catch((error) => {
        console.error('virhe tietoa poistettaessa: ', error);
      });
  }
  //Kirjautuminen
  login() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user: user,
          error: null,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.setState({
          error: errorMessage,
        });
      });
  }
  //ulos kirjaus
  logout() {
    this.unsubscribe();
    auth.signOut().then(() => {
      this.setState({
        user: null,
      });
      this.refData = null;
    });
  }

  render() {
    if (!this.state.user) {
      return (
        <Router>
          <div className='App'>
            <Header />
            <Content>
              <p>Et ole vielä kirjautunut sisälle</p>
              <Button primary onClick={this.login}>
                Kirjuadu
              </Button>
              <div>{this.state.error ? <p>{this.state.error}</p> : null}</div>
            </Content>
            <Menu />
          </div>
        </Router>
      );
    }
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route
            path='/'
            exact
            render={() => <SatunnainenResepti data={this.state.data} />}
          />
          <Route
            path='/Reseptit'
            render={() => <Reseptit data={this.state.data} />}
          />

          <Route
            path='/lisaaresepti'
            render={() => <LisaaResepti onFormSubmit={this.handleFormSubmit} />}
          />
          <Route
            path='/edit/:id'
            render={(props) => (
              <EditReciept
                data={this.state.data}
                onFormSubmit={this.handleFormSubmit}
                onDeleteReciept={this.handeleDeleteReciept}
                {...props}
              />
            )}
          />
          <Route
            path='/Profile'
            render={() => (
              <Profile onLogout={this.logout} user={this.state.user} />
            )}
          />

          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
