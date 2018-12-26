import React from 'react';

const Nav = ({}) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-faded mt-3" role="navigation">
    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto mt-2 font-weight-bold mt-lg-0 mr-4">
        <li className="nav-item active"><a href="#home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#aboutme" className="nav-link">About Me</a></li>
        <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#works" className="nav-link">Works</a></li>
        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
      </ul>
    </div>
  </nav>
);

const Heading = ({ }) => (
  <div className="heading">
    <h1>Big Uncle Yemi</h1>
  </div>
);

const Intro = ({}) => (
  <div className="intro">
    <p className="font-weight-bold">Web Artist, Photo freak, No.1 Otaku.</p>
    <div className="mt-2 mb-4">
      <span>
        Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
        eget venenatis urna,quis facilisis libero.Quisque in velit id
        ante suscipit convallis.
      </span>
    </div>
    <a className="text-white font-weight-bold" href="#aboutme">Read more -</a>
  </div>
);

const Header = ({ }) => (
  <header className="portfolio-header" id="home">
    <div className="bg-black"/>
    <div className="bg-red"/>
    <Nav />
    <Heading />
    <Intro />
  </header>
);

export default Header;
