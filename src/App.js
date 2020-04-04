import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import SatunnainenResepti from './components/Satunnainenresepti/SatunnainenResepti';
import Reseptit from './components/Reseptit/Reseptit';
import SuosikkiReseptit from './components/SuosikkiReseptit/SuosikkiReseptit';
import LisaaResepti from './components/LisaaResepti/LisaaResepti';
import Menu from './components/Menu/Menu';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sideBarOpen: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(newdata, storeddata) {
    storeddata = this.state.data.slice();
    storeddata.push(newdata);

    this.setState({
      data: storeddata,
    });
    console.log(this.state.data);
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
            path='/Suosikit'
            render={() => <SuosikkiReseptit data={this.state.data} />}
          />
          <Route
            path='/Reseptit'
            render={() => <Reseptit data={this.state.data} />}
          />

          <Route
            path='/lisaaresepti'
            render={() => <LisaaResepti onFormSubmit={this.handleFormSubmit} />}
          />
          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
