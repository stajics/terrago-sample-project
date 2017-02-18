import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './components/AppBar';
import SideBar from './components/SideBar';

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
              BBB
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
