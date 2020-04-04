import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ShowDate from '../Date/ShowDate';

import Button from '../buttons';

import './reseptiform.css';

class ReseptiForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        nimi: '',
        tarvikkeet: '',
        resepti: '',
        pv: <ShowDate />,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Form sent');
    let data = Object.assign({}, this.state.data);
    data.id = uuidv4();
    this.props.onFormSubmit(data);
    this.props.history.push('/suosikit');
  }

  ShowTime() {
    Date.now();
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
              <label htmlFor='tarvikkeet'>Tarvikkeet</label>
              <input
                type='text'
                name='tarvikkeet'
                value={this.state.data.tarvikkeet}
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
                value={this.state.data.reseptit}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className='reseptiform__pvm'>{this.state.data.pv}</div>

          <div className='reseptiform__row'>
            <div>
              <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div>
              <Button type='submit' primary>
                LISÄÄ
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(ReseptiForm);
