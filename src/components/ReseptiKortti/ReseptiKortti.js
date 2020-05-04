import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import ArrowRight from '@material-ui/icons/ArrowRight';

import './ReseptiKortti.css';
//Reseptikortti näkyvyyden määrittely
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
          <div className='dropdown-content'>
            {props.data.tarvike}
            {props.data.maara}
          </div>
        </div>
        <div className='dropdown'>
          Resepti
          <KeyboardArrowDown />
          <div className='dropdown-content'>{props.data.resepti}</div>
        </div>
        <div className='dropdown'>{moment(props.data.pv).format('D.M.Y')}</div>
      </div>
    </div>
  );
}

export default ReseptiKortti;
