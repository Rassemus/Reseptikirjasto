import React from 'react';

import Header from './components/Header/Header';
import SatunnainenResepti from './components/Satunnainenresepti/SatunnainenResepti';
import ValmiitReseptit from './components/ValmiitReseptit/ValmiitReseptit';
import Menu from './components/Menu/Menu';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <SatunnainenResepti />
      <Menu />
    </div>
  );
}

export default App;
