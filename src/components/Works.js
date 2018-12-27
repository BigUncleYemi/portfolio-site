import React from 'react';

const Content = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <hr />
        <div className="my-5">
          <h3 style={{ letterSpacing: '3px' }} className="my-5 font-weight-bolder">Works</h3>
          <div>
            <p>
              Quisque in velit id
            ante suscipit convallis in ac mauris.Aliquam eget venenatis urna
            ,quis facilisis libero.Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
            eget venenatis urna, quis facilisis libero.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <ul class="nav nav-tab justify-content-center my-5">
          <li class="nav-item">
            <a class="nav-link active" href="#m">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#a">Web Devlopment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#f">Mobile App Devlopment</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="d-flex flex-row flex-wrap col-sm-12">
        <div className="my-3 mx-auto">
          <img src="http://via.placeholder.com/300x350" alt="" />
        </div>
        <div className="my-3 mx-auto">
          <img src="http://via.placeholder.com/300x350" alt="" />
        </div>
        <div className="my-3 mx-auto">
          <img src="http://via.placeholder.com/300x350" alt="" />
        </div>
        <div className="my-3 mx-auto">
          <img src="http://via.placeholder.com/300x350" alt="" />
        </div>
        <div className="my-3 mx-auto">
          <img src="http://via.placeholder.com/300x350" alt="" />
        </div>
        <div className="my-3 mx-auto">
          <img src="http://via.placeholder.com/300x350" alt="" />
        </div>
      </div>
    </div>
  </div>
);

const Works = () => (
  <section className="d-flex flex-row position-relative my-5" id="works">
    <Content />
  </section>
);

export default Works;