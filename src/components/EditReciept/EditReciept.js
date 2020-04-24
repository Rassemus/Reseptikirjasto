import React from 'react';
import Content from '../Content/Content';
import ReseptiForm from '../ReseptiForm/ReseptiForm';

import './EditReciept.css';

function EditReciept(props) {
  const index = props.data.findIndex(
    (reciept) => reciept.id === props.match.params.id
  );

  let recieptData = props.data[index];

  return (
    <Content>
      <div className='editreciept'>
        <h2>Reseptin muokkaaminen</h2>

        <p>Match: {index} </p>

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
