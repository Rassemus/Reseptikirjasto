import React from 'react';

import ValmiitReseptit from '../ValmiitReseptit/ValmiitReseptit';
import Content from '../Content/Content';

import testdata from '../../testdata';

function Reseptit(props) {
  let rows = testdata.map(invoice => {
    return <ValmiitReseptit data={invoice} />;
  });

  return <Content>{rows}</Content>;
}

export default Reseptit;
