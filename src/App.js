import React, { Component } from 'react';
import './App.css';

import AppBar from './components/AppBar';
import SideBar from './components/SideBar';
import FixedItem from './components/FixedItem';
import Columns from './components/Columns';
import InputWithLabel from './components/InputWithLabel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { height: '4000', numberOfColumns: 4, themeColor: 'green' };
  }

  render() {
    const { height, numberOfColumns, themeColor } = this.state;
    return (
      <div className="App">
        <AppBar theme={themeColor} />
        <div className="main container-fluid hfill">
          <div className="row hfill">
            <div className="col-3 no-padding">
              <SideBar theme={themeColor} />
            </div>
            <div className="col-9 no-padding">
              <div className="container">
                <div className="inputs">
                  <InputWithLabel
                    label="Number of columns"
                    value={numberOfColumns}
                    onChange={(e) => { this.setState({ numberOfColumns: e.target.value }); }}
                  />
                  <InputWithLabel
                    label="Row height"
                    sufix="px"
                    value={height}
                    onChange={(e) => { this.setState({ height: e.target.value }); }}
                  />
                </div>
                <Columns height={`${height}px`} numberOfColumns={numberOfColumns} theme={themeColor} />
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
