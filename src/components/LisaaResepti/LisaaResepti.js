import React from 'react';
import Content from '../Content/Content';
import ReseptiForm from '../ReseptiForm/ReseptiForm';

import './LisaaResepti.css';

function LisaaResepti(props) {
  //reseptien lisääminen formilta
  return (
    <Content>
      <div className='LisaaResepti'>
        <h2>Uuden Reseptin lisääminen</h2>
        <ReseptiForm onFormSubmit={props.onFormSubmit} />
      </div>
    </Content>
  );
}
export default LisaaResepti;
