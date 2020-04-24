import React from 'react';
import { Link } from 'react-router-dom';

import ReseptiKortti from '../ReseptiKortti/ReseptiKortti';
import Content from '../Content/Content';
import { FloatingButton } from '../buttons';

import './Reseptit.css';

function Reseptit(props) {
  let rows = props.data.map((reciept) => {
    return <ReseptiKortti key={reciept.id} data={reciept} />;
  });

  return (
    <Content>
      <h2>Reseptit</h2>
      {rows}
      <Link to='lisaaresepti'>
        <FloatingButton secondary>+</FloatingButton>
      </Link>
    </Content>
  );
}

export default Reseptit;
