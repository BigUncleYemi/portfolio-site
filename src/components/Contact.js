import React from 'react';

const Form = () =>(
  <form className="col-sm-9">
    <div className="form-row">
      <div className="form-group col-6">
        <input className="form-control" type="text" placeholder="Enter Name" name="name" />
      </div>
      <div className="form-group col-6">
        <input className="form-control" type="email" placeholder="Enter Email" name="email" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-12">
        <input className="form-control" type="text" placeholder="Subject" name="subject" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-12">
        <textarea class="form-control" rows="7" placeholder="Message" name="message" required></textarea>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-12">
        <button className="btn btn-lg btn-ark btn-outline-dark">Submit</button>
      </div>
    </div>
  </form>
);

const Con = () => (
  <div className="col-sm-3">
    <div className="row">
      <div>
        <span>Tel: <a href="tel:+2349058165478">+234 905-816-5478</a></span>
      </div>
    </div>
    <div className="row">
      <div>
        <span>Tel: <a href="tel:+2348088759807">+234 808-875-9807</a></span>
      </div>
    </div>
    <div className="row">
      <div>
        <span>Email: <a href="mailto:Olayemioyebanji911@gmail.com">Olayemioyebanji911@gmail.com</a></span>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <section className="d-flex flex-row flex-wrap position-relative my-5" id="contact">
    <div className="custom-box" >
      <div className="d-flex flex-wrap flex-row">
        <div style={{margin: '10px 60px', color: '#5a5a5a', width: '80%'}}>
          <h3 style={{letterSpacing: '3px'}} className="my-5 font-weight-bolder">Get In Touch</h3>
          <div className="d-flex flex-row flex-wrap">
            <Form />
            <Con />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;