import React from 'react';
import { Link } from 'react-router-dom';

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowRight from '@material-ui/icons/ArrowRight';

import './ReseptiKortti.css';

function ReseptiKortti(props) {
  return (
    <div className='reseptikortti'>
      <div className='reseptikortti__ryhma'>
        <div className='ruoka'>
          {props.data.nimi}
          <div className='reseptikortti__linkki'>
            <Link to={'/edit/' + props.data.id}>
              <ArrowRight />
            </Link>
          </div>
        </div>
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
      <div className='napit'></div>
    </div>
  );
}

export default ReseptiKortti;
