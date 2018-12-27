import React from 'react';

const Left = () => (
  <div className="col-sm-6">
    <hr className="name-dash"/>
    <div className="name font-weight-bold">Oyebanji Olayemi Afolarin</div>
    <div style={{margin: '110px 190px', color: '#5a5a5a', width: '80%'}}>
      <h3 style={{letterSpacing: '3px'}} className="my-5 font-weight-bolder">About Big Uncle Yemi</h3>
      <div style={{width: '260px'}}>
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

const Right = () => (
  <div className="col-sm-6">
    <div className="position-relative">
      <div className="d-flex flex-column social">
        <a href=" "><i className="fab fa-twitter" aria-hidden="true"/>&emsp;Oyebanji Olayemi</a>
        <a href=" "><i className="fab fa-facebook-f" aria-hidden="true"/>&emsp;Oyebanji Olayemi</a>
        <a href=" "><i className="fab fa-instagram" aria-hidden="true"/>&emsp;Big_Uncle_Yemi</a>
        <a href=" "><i className="fab fa-github" aria-hidden="true"/>&emsp;Big Uncle Yemi</a>
      </div>
      <div className="mypic">
        <img src="http://via.placeholder.com/400x700" alt="me" />
      </div>
    </div>
  </div>
);

const About = () => (
  <section className="d-flex flex-row position-relative" id="aboutme">
    <Left />
    <Right />
  </section>
);

export default About;