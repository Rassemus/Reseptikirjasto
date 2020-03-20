import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import SatunnainenResepti from './components/Satunnainenresepti/SatunnainenResepti';
import Reseptit from './components/Reseptit/Reseptit';
import SuosikkiReseptit from './components/SuosikkiReseptit/SuosikkiReseptit';
import LisaaResepti from './components/LisaaResepti/LisaaResepti';
import Menu from './components/Menu/Menu';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' exact component={SatunnainenResepti} />
        <Route path='/Suosikit' component={SuosikkiReseptit} />
        <Route path='/Reseptit' component={Reseptit} />
        <Route path='/LisaaResepti' component={LisaaResepti} />
        <Menu />
      </div>
    </Router>
  );
}

export default App;
