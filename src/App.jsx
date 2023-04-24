import { useState } from 'react'
import { useEffect } from "react";
import PhotoViewer from './components/PhotoViewer';
// import StyledInput from './components/StyledInput';
import './App.css'

import AosScrollComponent from './components/AosScrollComponent';

import Dropdown from './components/Dropdown.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <div className="location-name" >
        <h1>HOA VIET MARKET</h1>
        <h2>Serving Seafoods, Poultry, & Produce&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</h2>

        <img id="phone-icon" src="https://cdn3.iconfinder.com/data/icons/contact-us-set-3/256/5-512.png" alt="yes"></img>
        <h3>&emsp;(818) 992-7816<br /></h3>
      </div>
      <audio controls autoPlay>
        <source src="mall-music.mp3" type="audio/mpeg" />
      </audio>

      {/* <div className='nav-container'>
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />

      </div> */}

      <div className="cards-container">
        <div className="card" data-aos="fade-right">
          <h2>About Our Business </h2>
          <p>This site is unofficial. Hoa Viet Market is a Vietnamese small business that has served the Los Angeles community for many years. We started as a small seafood and produce stand, and over time we expanded to offer meat, poultry, and specialty items from other cultures.</p>

          <p>Despite our growth, we still pride ourselves on our fresh, high-quality ingredients, and we source from local farmers and fishermen whenever possible. Our customers are like family to us, and we have become a staple of the community, where neighbors come to catch up and share recipes.</p>

          <p>Through all of our changes, our commitment to quality and service has remained constant. We are a small business with a big heart, and we will continue to serve the Los Angeles community for many more years.</p>
          <div>
            <img id="rest-image"
              src="https://lh5.googleusercontent.com/p/AF1QipNB54WNO7S5fCS4zqKAtocl2CeyfpBVJrNI574X" alt="My Image" />
          </div>
        </div>
        <div className='ccc'>
          <div className="card-2" data-aos="fade-left">
            <h2>Where to Find Us</h2>
            <p>21001 Sherman Way<br />
              Los Angeles, CA 91303
            </p>
            <a href="https://www.yelp.com/map/hoa-viet-market-los-angeles">
              <img id="rest-image"
                src="https://maps.googleapis.com/maps/api/staticmap?size=315x150&sensor=false&client=gme-yelp&language=en&scale=1&zoom=15&center=34.202214%2C-118.591014&markers=scale%3A1%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_32x43.png%7C34.202214%2C-118.591014&signature=-g2dJgLGpxQIssshGKIocbSNSPk=" alt="My Image" />
            </a>

          </div>
          <div className="card-2" data-aos="fade-left">
            <h2>Our Working Hours</h2>
            <p>Monday - Fridays : &emsp;&emsp;9:00 AM - 9:00 PM<br />Weekends : &emsp;&emsp;&emsp;&emsp;&emsp;9:00 AM - 9:00 PM</p>
          </div>
          <div className="card-2" data-aos="fade-left">
            <h2>Our Available Amenities</h2>
            <p>
              <img id="checkmark" src="https://cdn-icons-png.flaticon.com/512/443/443138.png" alt="yes"></img>
              &emsp;Parking for customers&emsp;&emsp;&emsp;&emsp;
              <img id="checkmark" src="https://cdn-icons-png.flaticon.com/512/443/443138.png" alt="yes"></img>
              &emsp;Accepts credit cards<br />
              <img id="checkmark" src="https://cdn-icons-png.flaticon.com/512/443/443138.png" alt="yes"></img>
              &emsp;Wheelchair accessible&emsp;&emsp;&emsp;&emsp;
              <img id="checkmark" src="https://cdn-icons-png.flaticon.com/512/443/443138.png" alt="yes"></img>
              &emsp;Air conditioning&emsp;&ensp;&nbsp;</p>

          </div>
        </div>


      </div>
      <div className="cards-container">
        <div className='ccc'>
          <div className="card-2" data-aos="fade-right">
            <h2>Our Contact</h2>
            <p>Email us for job inquiries, product questions, or customer support!<br />
            </p>
            <textarea id="w3review" name="w3review" rows="10" cols="62" ></textarea>
            <p>Your Email: <br />
            </p>
            <textarea id="w3review" name="w3review" rows="1" cols="62" ></textarea>
            <div id="submit">Submit</div>
          </div>
          <div className="card-2" id="rawr" data-aos="fade-right">
            <h2>Our Yelp</h2>
            <a href="https://www.yelp.com/biz/hoa-viet-market-los-angeles">www.yelp.com/biz/hoa-viet-market-los-angeles</a>
          </div>
        </div>
        <div className="card" data-aos="fade-left">
          <h2>Our Photo Gallery </h2>
          <PhotoViewer />
        </div>


      </div>

      <div>
        <p>&emsp;&emsp;LA-Business Project for Snap Academies Engineering&emsp;&ensp;&nbsp;
          <img id="heart" src="https://cdn-icons-png.flaticon.com/512/1076/1076984.png" alt="yes"></img>
          &emsp;&ensp;&nbsp;Template-lessly built with HTML, CSS, Javascript, & React
        </p>
      </div>
    </>
  )
}

export default App
