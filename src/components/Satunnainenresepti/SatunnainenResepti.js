import React, { useState } from 'react';

import reseptilista from '../ReseptiKortti/reseptilista';

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

  let parse = reseptilista.concat(props.data);

  const randomRecieptClick = (props) => {
    let randomReciept = parse[Math.floor(Math.random() * parse.length)];

    setToRandom(
      true ? (
        <div className='randomReciept__click'>
          <h2>{randomReciept.nimi}</h2>
          <h3>Tarvikkeet</h3>
          <div>{randomReciept.tarvikkeet}</div>

          <h3>Resepti</h3>
          <div>{randomReciept.resepti}</div>
        </div>
      ) : (
        false
      )
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
