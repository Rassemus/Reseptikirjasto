import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import Button from '../buttons';

import './reseptiform.css';

class ReseptiForm extends Component {
  constructor(props) {
    super(props);
    const data = props.data
      ? props.data
      : {
          nimi: '',
          tarvike: '',
          resepti: '',
          pv: new Date().toISOString(),
        };

    this.state = {
      data: data,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDeleteReciept = this.handleDeleteReciept.bind(this);
  }
  //käsittelee input lomakkeita
  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  }
  //peruutus
  handleCancel(event) {
    event.preventDefault();
    this.props.history.goBack();
  }
  //datan tallennus
  handleSubmit(e) {
    e.preventDefault();
    console.log('Form sent');
    let data = Object.assign({}, this.state.data);
    data.id = data.id ? data.id : uuidv4();
    this.props.onFormSubmit(data);
    this.props.history.push('/reseptit');
  }
  //datan poistaminen
  handleDeleteReciept(event) {
    event.preventDefault();
    this.props.onDeleteReciept(this.state.data.id);
    this.props.history.push('/reseptit');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='reseptiform'>
          <div className='reseptiform__row'>
            <div>
              <label htmlFor='nimi'>Ruoka</label>
              <input
                type='text'
                name='nimi'
                value={this.state.data.nimi}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className='reseptiform__row'>
            <div>
              <label htmlFor='tarvike'>Tarvike</label>
              <input
                type='text'
                name='tarvike'
                value={this.state.data.tarvike}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className='reseptiform__row'>
            <div>
              <label htmlFor='resepti'>Resepti</label>
              <textarea
                type='text'
                name='resepti'
                rows='6'
                value={this.state.data.resepti}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className='reseptiform__pvm'>
            {moment(this.state.data.pv).format('D.M.Y')}
          </div>
          <div className='reseptiform__row'>
            {this.props.onDeleteReciept ? (
              <div>
                <Button onClick={this.handleDeleteReciept}>POISTA</Button>
              </div>
            ) : (
              ''
            )}
            <div>
              <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div>
              <Button type='submit' primary>
                {this.state.data.id ? 'TALLENNA' : 'LISÄÄ'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(ReseptiForm);
