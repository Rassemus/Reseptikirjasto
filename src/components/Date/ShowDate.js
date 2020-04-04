import React from 'react';

function ShowDate(props) {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return <div>{`Päivämäärä ${day}.${month}.${year}`}</div>;
}

export default ShowDate;
