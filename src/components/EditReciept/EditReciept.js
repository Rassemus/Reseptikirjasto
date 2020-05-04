import React from 'react';
import Content from '../Content/Content';
import ReseptiForm from '../ReseptiForm/ReseptiForm';

import './EditReciept.css';

function EditReciept(props) {
  //etsii indeksin reseptien joukosta ja tarkistaa yhtenäisyyden
  const index = props.data.findIndex(
    (reciept) => reciept.id === props.match.params.id
  );

  let recieptData = props.data[index];
  //datan muokkaus komponentti
  return (
    <Content>
      <div className='editreciept'>
        <h2>Reseptin muokkaaminen</h2>

        <ReseptiForm
          onFormSubmit={props.onFormSubmit}
          data={recieptData}
          onDeleteReciept={props.onDeleteReciept}
        />
      </div>
    </Content>
  );
}
export default EditReciept;
