import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from './firebase';

import Header from './components/Header/Header';
import SatunnainenResepti from './components/Satunnainenresepti/SatunnainenResepti';
import Settings from './components/Settings/Settings';
import Reseptit from './components/Reseptit/Reseptit';
import LisaaResepti from './components/LisaaResepti/LisaaResepti';
import Menu from './components/Menu/Menu';
import EditReciept from './components/EditReciept/EditReciept';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.dbRef = firebase.firestore();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handeleDeleteReciept = this.handeleDeleteReciept.bind(this);
  }

  componentDidMount() {
    this.refData = this.dbRef.collection('data');
    this.refData.orderBy('pv', 'desc').onSnapshot((docs) => {
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

  handleFormSubmit(newdata) {
    // let storeddata = this.state.data.slice();
    // const index = storeddata.findIndex((reciept) => reciept.id === newdata.id);
    // if (index >= 0) {
    //   storeddata[index] = newdata;
    // } else {
    //   storeddata.push(newdata);
    // }
    // this.setState({
    //   data: storeddata,
    // });

    this.refData.doc(newdata.id).set(newdata);
  }

  handeleDeleteReciept(id) {
    this.refData
      .doc(id)
      .delete()
      .then()
      .catch((error) => {
        console.error('virhe tietoa poistettaessa: ', error);
      });
  }

  render() {
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
          <Route path='/Settings' render={() => <Settings />} />

          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
