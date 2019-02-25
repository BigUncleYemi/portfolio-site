import React from 'react';

const Left = () => (
  <div className="col-md-6">
    <hr className="name-dash"/>
    <div className="name font-weight-bold">Oyebanji Olayemi Afolarin</div>
    <div style={{}}>
      <h3 style={{letterSpacing: '3px'}} className="my-4 font-weight-bolder">About Big Uncle Yemi</h3>
      <div className="text">
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
  <div className="col-md-6">
    <div className="position-relative">
      <div className="d-flex flex-column social">
        <a href=" "><i className="fab fa-twitter" aria-hidden="true"/>&emsp;Oyebanji Olayemi</a>
        <a href=" "><i className="fab fa-facebook-f" aria-hidden="true"/>&emsp;Oyebanji Olayemi</a>
        <a href=" "><i className="fab fa-instagram" aria-hidden="true"/>&emsp;Big_Uncle_Yemi</a>
        <a href=" "><i className="fab fa-github" aria-hidden="true"/>&emsp;Big Uncle Yemi</a>
      </div>
      <div className="mypic">
        <img src="https://lh3.googleusercontent.com/HL70V7N3nI6Abt5FngxY-DP-w_rXmauJijAlz5jlQVYswCCtIr98-f-uJwY5PAEew-dWNUMpOJxV9Lr-NiEfRtjymagOBYgZcQXom98XaVWMp9GB1qxuv7n6QFes8iNbnfBiUrbLD7i2dkk_k-Nd92F-d5FqtHAj5AzdTeemP64XICx7NfWFoWZWMT4oGwfyXDdQ4q6BTy_a3G081yEW02v0TWzMO40mGLTBmG0dqqKL64T_E9kQPnRo96zsMBjuFfd4nKZefpsKfgjlMQ6r98yAArAZ6mnBprYObEBtuxLbpkmYvin1yUOdGCvfhKJnfI6Z85wfbljPOm04QGB_7yfnjWJ-T-LUm2AZuAdhKl20DfWkbr1GK-51gb81RxBCt8DMlSf-va9MOdOKYe_72j41c-5qDbp8SJ48r3Qqt3gvdkgUsdbzdJ_XXHzhjveKRpjBLIkUQ-GwjgSVR6VbqpDkcOeneJuQJY_MIsiXpiyknflSR3FPzF_OSSG47LzyYmY58wKeLWogLbfkJuSm3OZtRpMBinunz6be9m8bTCvIytx4399NxeNTTz0kj9K85Phg-istIZXFDj_0zm9yVdEhqkG80U_QEQeVepE0MCPMR0DbuRMyBBZfr0rb6vsNlIbO7eEUp2cOAQQgJxcBRGHQLc_tLRw=w525-h922-no" alt="me" />
      </div>
    </div>
  </div>
);

const About = () => (
  <section className="d-flex flex-row flex-wrap position-relative" id="aboutme">
    <Left />
    <Right />
  </section>
);

export default About;