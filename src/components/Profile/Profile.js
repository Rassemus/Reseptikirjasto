import React from 'react';

import Content from '../Content/Content';
import Button from '../buttons';

import './Profile.css';

function Settings(props) {
  //kirjautuneen käyttäjän profiili
  //näyttää nimen, kuvan ja sähköpostin
  //ulos kirjautuminen
  return (
    <Content>
      <div className='profile'>
        <h2>Profiili</h2>
        <h3>Mitä kuuluu {props.user.displayName}?</h3>
        <div className='profile__profile'>
          <div className='profile__userdata'>
            <div>
              <img src={props.user.photoURL} alt='' />
            </div>
            <div>
              {props.user.displayName}
              <br />
              {props.user.email}
            </div>
          </div>
          <div>
            <Button onClick={props.onLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Settings;
