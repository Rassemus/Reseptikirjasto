import React from 'react';

import Content from '../Content/Content';
import { FloatingButton } from '../buttons';

function SuosikkiReseptit(props) {
  return (
    <Content>
      <h2>Suosikki reseptit</h2>
      <FloatingButton secondary>+</FloatingButton>
    </Content>
  );
}

export default SuosikkiReseptit;
