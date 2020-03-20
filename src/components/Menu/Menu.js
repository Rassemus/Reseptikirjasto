import React from 'react';
import { Link } from 'react-router-dom';

import Home from '@material-ui/icons/Home';
import Favorite from '@material-ui/icons/Favorite';
import MenuBook from '@material-ui/icons/MenuBook';

import './Menu.css';

function Menu(props) {
  return (
    <div className='Menu'>
      <Link to='/'>
        <div className='menu__nappi'>
          <Home htmlColor='white' />
        </div>
      </Link>

      <Link to='/suosikki_reseptit'>
        <div className='menu__nappi'>
          <Favorite htmlColor='white' />
        </div>
      </Link>

      <Link to='/reseptit'>
        <div className='menu__nappi'>
          <MenuBook htmlColor='white' />
        </div>
      </Link>
    </div>
  );
}

export default Menu;
