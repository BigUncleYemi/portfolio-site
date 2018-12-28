import React from 'react';

const Contain = () => (
  <div className="w-80 mx-auto">
    <div className="row">
      <div className="col-sm-12">
        <h3 style={{letterSpacing: '3px'}} className="my-5 font-weight-bolder text-white">Recent Blog Posts</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 d-flex flex-row flex-wrap justify-content-center">
        <div className="box">
          <div className="text-container">
            <div>
              <div className="quote">
                <span>"</span>
              </div>
              <div>
                <p className="headline">intro text</p>
              </div>
              <div>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box a">
          <div className="text-container a">
            <div>
              <div className="quote">
                <span>"</span>
              </div>
              <div>
                <p className="headline">intro text</p>
              </div>
              <div>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box ">
          <div className="text-container">
            <div>
              <div className="quote">
                <span>"</span>
              </div>
              <div>
                <p className="headline">intro text</p>
              </div>
              <div>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box a">
          <div className="text-container a">
            <div>
              <div className="quote">
                <span>"</span>
              </div>
              <div>
                <p className="headline">intro text</p>
              </div>
              <div>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="text-container">
            <div>
              <div className="quote">
                <span>"</span>
              </div>
              <div>
                <p className="headline">intro text</p>
              </div>
              <div>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box a">
          <div className="text-container a">
            <div>
              <div className="quote">
                <span>"</span>
              </div>
              <div>
                <p className="headline">intro text</p>
              </div>
              <div>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <section  className="d-flex flex-row position-relative my-5 py-5" id="blog">
    <Contain />
  </section>
);

export default Blog;