import React from 'react';

import './satunnainenresepti.css';

import { RandomButton } from '../buttons';

function SatunnainenResepti() {
  return (
    <div className='satunnainen__resepti'>
      <div className='ohje__lisää'>Lisää suosikki reseptejä</div>
      <div className='ohje__klick'>tai klikkaa alla olevaa nappia.</div>
      <RandomButton primary>Click me</RandomButton>
    </div>
  );
}

export default SatunnainenResepti;
