import React from 'react';

const Left =({ }) => (
  <div className="col-sm-6">
    <div className="float-right">
      <img src="http://via.placeholder.com/500x800" alt="me" />
    </div>
  </div>
);

const Right = ({ }) => (
  <div className="col-sm-6">
    <hr className="serv-dash"/>
    <div className="craft font-weight-bold">Craft</div>
    <div style={{margin: '110px 90px', color: '#5a5a5a', width: '80%'}}>
      <h3 style={{letterSpacing: '3px'}} className="my-5 font-weight-bolder">Services</h3>
      <div className="d-flex flex-column">
        <div className="d-flex flex-row flex-wrap align-items-center">
          <div className="serv">
            <i className="fas fa-laptop-code fa-4x"/>
            <div className="m-3">
              <span>Web Development</span>
            </div>
          </div>
          <div className="w-50">
            <p>
            Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
            eget venenatis urna,quis facilisis libero.Quisque in velit id
            ante suscipit convallis in ac mauris.
            </p>
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap align-items-center">
          <div className="serv order-2">
            <i className="fas fa-mobile-alt fa-4x" />
            <div className="m-3">
              <span>Mobile App Development with React-Native</span>
            </div>
          </div>
          <div className="w-50">
            <p>
            Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
            eget venenatis urna,quis facilisis libero.Quisque in velit id
            ante suscipit convallis in ac mauris.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = ({ }) => (
  <section className="d-flex flex-row position-relative my-5" id="services">
    <Left />
    <Right />
  </section>
);

export default Services;