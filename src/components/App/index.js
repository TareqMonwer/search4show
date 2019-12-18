import React, { Component } from 'react';
import Main from '../Main';
import Series from '../../containers/series'
import './App.css';
import 'whatwg-fetch';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <h3>TV Series List</h3>          
        </header>
        <br />
        <Main />
      </div>
    );
  }
}

export default App;
