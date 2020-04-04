import React from 'react';

import ReseptiKortti from '../ReseptiKortti/ReseptiKortti';
import Content from '../Content/Content';

import reseptilista from '../ReseptiKortti/reseptilista';

function Reseptit(props) {
  let rows = reseptilista.map(invoice => {
    return <ReseptiKortti key={invoice.id} data={invoice} />;
  });
  let rows1 = props.data.map(invoice => {
    return <ReseptiKortti key={invoice.id} data={invoice} />;
  });

  return (
    <Content>
      {rows}
      {rows1}
    </Content>
  );
}

export default Reseptit;
