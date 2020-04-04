import React from 'react';

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

import './ReseptiKortti.css';

function ReseptiKortti(props) {
  return (
    <div className='valmiit__reseptit'>
      <div className='ruoka'>{props.data.nimi}</div>
      <div className='dropdown'>
        Tarvikkeet
        <KeyboardArrowDown />
        <div className='dropdown-content'>{props.data.tarvikkeet}</div>
      </div>
      <div className='dropdown'>
        Resepti
        <KeyboardArrowDown />
        <div className='dropdown-content'>{props.data.resepti}</div>
      </div>
      <div className='dropdown'>{props.data.pv}</div>
    </div>
  );
}

export default ReseptiKortti;
