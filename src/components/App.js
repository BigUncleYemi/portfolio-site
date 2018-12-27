import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Works from './Works'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <About />
        <Services />
        <Works />
      </div>
    );
  }
}

export default App;
