import React from 'react';
import { Link } from 'react-router-dom';

import Home from '@material-ui/icons/Home';

import MenuBook from '@material-ui/icons/MenuBook';
import Settings from '@material-ui/icons/Settings';

import './Menu.css';

function Menu(props) {
  return (
    <div className='Menu'>
      <Link to='/'>
        <div className='menu__nappi'>
          <Home htmlColor='white' />
        </div>
      </Link>

      <Link to='/reseptit'>
        <div className='menu__nappi'>
          <MenuBook htmlColor='white' />
        </div>
      </Link>

      <Link to='/settings'>
        <div className='menu__nappi'>
          <Settings htmlColor='white' />
        </div>
      </Link>
    </div>
  );
}

export default Menu;
