import React from 'react';
import { Link } from 'react-router-dom';

import ReseptiKortti from '../ReseptiKortti/ReseptiKortti';
import Content from '../Content/Content';
import { FloatingButton } from '../buttons';

function SuosikkiReseptit(props) {
  let rows = props.data.map(invoice => {
    return <ReseptiKortti key={invoice.id} data={invoice} />;
  });

  return (
    <Content>
      {rows}
      <Link to='lisaaresepti'>
        <FloatingButton secondary>+</FloatingButton>
      </Link>
    </Content>
  );
}

export default SuosikkiReseptit;
