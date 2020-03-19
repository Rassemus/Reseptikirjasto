import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import SatunnainenResepti from './components/Satunnainenresepti/SatunnainenResepti';
import ValmiitReseptit from './components/ValmiitReseptit/ValmiitReseptit';
import Menu from './components/Menu/Menu';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' exact component={SatunnainenResepti} />
        <Route path='/Reseptit' component={ValmiitReseptit} />
        <Menu />
      </div>
    </Router>
  );
}

export default App;
