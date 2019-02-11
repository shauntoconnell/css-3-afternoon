import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Banner from './Components/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<Banner />
      </div>
    );
  }
}

export default App;
