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
    this.state = { height: '400', numberOfColumns: 4, themeColor: 'green' };
  }

  render() {
    const { height, numberOfColumns, themeColor } = this.state;
    return (
      <div className="App">
        <AppBar
          theme={themeColor}
          onChangeTheme={(theme) => { this.setState({ themeColor: theme }); }}
        />
        <div className="main container-fluid hfill">
          <div className="row .no-gutters hafill">
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 no-padding sidebar">
              <SideBar theme={themeColor} />
            </div>
            <div className="col-12 col-sm-6 col-md-7 col-lg-8 no-padding">
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
