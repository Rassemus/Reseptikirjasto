import React from 'react';
import { Link } from 'react-router-dom';

import Home from '@material-ui/icons/Home';

import MenuBook from '@material-ui/icons/MenuBook';
import Person from '@material-ui/icons/Person';

import './Menu.css';

function Menu(props) {
  //menu palkki, linkit eri osioihin
  return (
    <div className='Menu'>
      <Link to='/'>
        <Home htmlColor='white' />
      </Link>

      <Link to='/reseptit'>
        <MenuBook htmlColor='white' />
      </Link>

      <Link to='/profile'>
        <Person htmlColor='white' />
      </Link>
    </div>
  );
}

export default Menu;
