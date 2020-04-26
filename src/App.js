import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import SatunnainenResepti from './components/Satunnainenresepti/SatunnainenResepti';
import Settings from './components/Settings/Settings';
import Reseptit from './components/Reseptit/Reseptit';
import LisaaResepti from './components/LisaaResepti/LisaaResepti';
import Menu from './components/Menu/Menu';
import EditReciept from './components/EditReciept/EditReciept';

import reseptilista from './components/ReseptiKortti/reseptilista';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: reseptilista,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handeleDeleteReciept = this.handeleDeleteReciept.bind(this);
    this.handleSelectListForm = this.handleSelectListForm.bind(this);
  }

  handleFormSubmit(newdata) {
    let storeddata = this.state.data.slice();
    const index = storeddata.findIndex((reciept) => reciept.id === newdata.id);
    if (index >= 0) {
      storeddata[index] = newdata;
    } else {
      storeddata.push(newdata);
    }
    this.setState({
      data: storeddata,
    });
  }

  handleSelectListForm(newitem) {
    let selectList = this.state.selectList.slice();
    selectList.push(newitem);
    selectList.sort();
    this.setState({
      selectList: selectList,
    });
  }

  handeleDeleteReciept(id) {
    let storeddata = this.state.data.slice();
    storeddata = storeddata.filter((reciept) => reciept.id !== id);
    this.setState({
      data: storeddata,
    });
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route
            path='/'
            exact
            render={() => <SatunnainenResepti data={this.state.data} />}
          />
          <Route
            path='/Reseptit'
            render={() => <Reseptit data={this.state.data} />}
          />

          <Route
            path='/lisaaresepti'
            render={() => (
              <LisaaResepti
                onFormSubmit={this.handleFormSubmit}
                selectList={this.state.selectList}
              />
            )}
          />
          <Route
            path='/edit/:id'
            render={(props) => (
              <EditReciept
                data={this.state.data}
                selectList={this.state.selectList}
                onFormSubmit={this.handleFormSubmit}
                onDeleteReciept={this.handeleDeleteReciept}
                {...props}
              />
            )}
          />
          <Route path='/Settings' render={() => <Settings />} />

          <Menu />
        </div>
      </Router>
    );
  }
}

export default App;
