import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <About />
        <Services />
      </div>
    );
  }
}

export default App;
