import React from 'react';

const Left = ({ }) => (
  <div className="col-sm-6">
    <hr className="name-dash"/>
    <div className="name font-weight-bold">Oyebanji Olayemi</div>
    <div style={{margin: '110px 190px', color: '#5a5a5a', width: '80%'}}>
      <h3 style={{letterSpacing: '3px'}} className="my-5 font-weight-bolder">About Big Uncle Yemi</h3>
      <div className="w-50">
        <p>
          Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
          eget venenatis urna,quis facilisis libero.Quisque in velit id
          ante suscipit convallis in ac mauris.Aliquam eget venenatis urna
          ,quis facilisis libero.Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
          eget venenatis urna, quis facilisis libero.
        </p>
        <p>
          Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
          eget venenatis urna,quis facilisis libero.Quisque in velit id
          ante suscipit convallis in ac mauris.Aliquam eget venenatis urna
          ,quis facilisis libero.Quisque in velit id ante suscipit convallis in ac mauris.Aliquam
          eget venenatis urna, quis facilisis libero.
        </p>
      </div>
    </div>
  </div>
);

const Right = ({}) => (
  <div className="col-sm-6">
    <div>
      <div className="d-flex flex-column social">
        <a>Twitter</a>
        <a>Twitter</a>
        <a>Twitter</a>
      </div>
      <div>
        <img src="http://via.placeholder.com/150x200" alt="me" />
      </div>
    </div>
  </div>
)

const About = ({ }) => (
  <section className="d-flex flex-row position-relative">
    <Left />
    <Right />
  </section>
);

export default About;