import React, { useState } from 'react';

import './satunnainenresepti.css';

import { RandomButton } from '../buttons';
//Satunnaisen reseptin näyttävä muuttuja
const Display = ({ selected }) => <div>{selected}</div>;

function SatunnainenResepti(props) {
  const [selected, setToSelected] = useState(
    <div className='ohje__klick'>
      {'Klikkaa alla olevaa nappia ja katso satunnainen resepti.'}
    </div>
  );
  const setToRandom = (random) => setToSelected(random);
  //props.data.reciept lyhennetty reciept muotoon
  let reciept = props.data;
  //satunnaiisen reseptin klikkaus toiminto
  const randomRecieptClick = (props) => {
    let randomReciept = reciept[Math.floor(Math.random() * reciept.length)];
    //Satunnaisen reseptin esitys
    setToRandom(
      <div className='randomReciept__click'>
        <h2>{randomReciept.nimi}</h2>
        <h3>Tarvikkeet</h3>
        <div>{randomReciept.tarvike}</div>

        <h3>Resepti</h3>
        <div>{randomReciept.resepti}</div>
      </div>
    );
  };

  return (
    <div className='satunnainen__resepti'>
      <div className='ohje__lisää'>Lisää suosikki reseptejä</div>
      <div className='center'>
        <div className='ohje__tai'>tai</div>
      </div>
      <Display selected={selected} />

      <RandomButton primary onClick={randomRecieptClick}>
        Click me
      </RandomButton>
    </div>
  );
}

export default SatunnainenResepti;
