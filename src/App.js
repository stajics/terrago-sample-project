import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './components/AppBar';
import SideBar from './components/SideBar';
import FixedItem from './components/FixedItem';
import Columns from './components/Columns';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <div className="main container-fluid hfill">
          <div className="row hfill">
            <div className="col-3 no-padding">
              <SideBar />
            </div>
            <div className="col-9 no-padding">
              <div className="container">
                <Columns height="300px" numberOfRows={4} backgroundColor="green" />
              </div>
            </div>
          </div>
        </div>
        <FixedItem />
      </div>
    );
  }
}

export default App;
