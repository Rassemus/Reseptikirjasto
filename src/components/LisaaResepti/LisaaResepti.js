import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../buttons';

import './lisaaresepti.css';

function LisääResepti() {
  return (
    <form>
      <div className='reseptiform'>
        <div className='reseptiform__row'>
          <div>
            <label for='ruoka'>Ruoka</label>
            <input type='text' name='ruoka' />
          </div>
        </div>
        <div className='reseptiform__row'>
          <div>
            <label for='tarvikkeet'>Tarvikkeet</label>
            <input type='text' name='tarvikkeet' />
          </div>
        </div>
        <div className='reseptiform__row'>
          <div>
            <label for='resepti'>Resepti</label>
            <textarea name='resepti' />
          </div>
        </div>
        <div className='reseptiform__row'>
          <div>
            <Button>PERUUTA</Button>
          </div>
          <div>
            <Button type='submit' primary>
              LISÄÄ
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default withRouter(LisääResepti);
