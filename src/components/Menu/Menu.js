import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

function Menu(props) {
  return (
    <div className='Menu'>
      <Link to='/'>
        <div className='menu__nappi'>ES</div>
      </Link>

      <div className='menu__nappi'>SR</div>

      <Link to='/reseptit'>
        <div className='menu__nappi'>VR</div>
      </Link>
    </div>
  );
}

export default Menu;
