import React from 'react';
import { Link } from 'react-router-dom';

import Content from '../Content/Content';
import { FloatingButton } from '../buttons';

function SuosikkiReseptit(props) {
  return (
    <Content>
      <h2>Suosikki reseptit</h2>
      <Link to='LisaaResepti'>
        <FloatingButton secondary>+</FloatingButton>
      </Link>
    </Content>
  );
}

export default SuosikkiReseptit;
