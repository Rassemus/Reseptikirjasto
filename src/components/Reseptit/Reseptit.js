import React from 'react';

import ReseptiKortti from '../ReseptiKortti/ReseptiKortti';
import Content from '../Content/Content';

import reseptilista from '../ReseptiKortti/reseptilista';

import './Reseptit.css';

function Reseptit(props) {
  let rows = reseptilista.map((reciept) => {
    return <ReseptiKortti key={reciept.id} data={reciept} />;
  });
  let rows1 = props.data.map((reciept) => {
    return <ReseptiKortti key={reciept.id} data={reciept} />;
  });

  return (
    <Content>
      <div className='reseptit'>
        <h2>Reseptit</h2>

        {rows}
        {rows1}
      </div>
    </Content>
  );
}

export default Reseptit;
