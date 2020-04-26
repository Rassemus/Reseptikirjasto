import React, { useState } from 'react';

import './satunnainenresepti.css';

import { RandomButton } from '../buttons';

const Display = ({ selected }) => <div>{selected}</div>;

function SatunnainenResepti(props) {
  const [selected, setToSelected] = useState(
    <div className='ohje__klick'>
      {'tai klikkaa alla olevaa nappia ja katso satunnainen resepti.'}
    </div>
  );
  const setToRandom = (random) => setToSelected(random);

  let reciept = props.data;

  const randomRecieptClick = (props) => {
    let randomReciept = reciept[Math.floor(Math.random() * reciept.length)];

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

      <Display selected={selected} />

      <RandomButton primary onClick={randomRecieptClick}>
        Click me
      </RandomButton>
    </div>
  );
}

export default SatunnainenResepti;
