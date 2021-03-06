import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Tourlist from './components/Tourlist/Tourlist';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
      </React.Fragment>
    );
  }
}

export default App;
