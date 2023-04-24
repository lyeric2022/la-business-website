import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class AosScrollComponent extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <h1 data-aos="fade-up">Welcome to my website</h1>
        <p data-aos="fade-up" data-aos-delay="200">Scroll down to see more</p>
        <div className="my-element" data-aos="zoom-in" data-aos-duration="1000">
          This element will zoom in with a duration of 1 second.
        </div>
      </div>
    );
  }
}

export default AosScrollComponent;
