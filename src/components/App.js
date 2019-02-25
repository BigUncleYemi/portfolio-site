import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Works from './Works';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {/* <About />
        <Services />
        <Works /> */}
        {/* <Blog /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
