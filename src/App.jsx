import { useState } from 'react'
import './App.css'

import Dropdown from './components/Dropdown.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="location-name">
        <h1>HOA VIET MARKET</h1>
        <h2>Serving Seafoods, Poultry, & Produce</h2>
      </div>

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
        <div className="card">
          <h2>About Our Business</h2>
          <p>Hoa Viet Market is a Vietnamese small business that has served the Los Angeles community for many years. We started as a small seafood and produce stand, and over time we expanded to offer meat, poultry, and specialty items from other cultures.</p>

          <p>Despite our growth, we still pride ourselves on our fresh, high-quality ingredients, and we source from local farmers and fishermen whenever possible. Our customers are like family to us, and we have become a staple of the community, where neighbors come to catch up and share recipes.</p>

          <p>Through all of our changes, our commitment to quality and service has remained constant. We are a small business with a big heart, and we will continue to serve the Los Angeles community for many more years.</p>
          <div>
            <img id="rest-image"
              src="https://lh5.googleusercontent.com/p/AF1QipNB54WNO7S5fCS4zqKAtocl2CeyfpBVJrNI574X" alt="My Image" />
          </div>
        </div>
        <div className='ccc'>
          <div className="card-2">
              <h2>Where We Are</h2>
              <p>21001 Sherman Way<br />
                Los Angeles, CA 91303
              </p>
              <div>
                <img id="rest-image"
                  src="https://maps.googleapis.com/maps/api/staticmap?size=315x150&sensor=false&client=gme-yelp&language=en&scale=1&zoom=15&center=34.202214%2C-118.591014&markers=scale%3A1%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_32x43.png%7C34.202214%2C-118.591014&signature=-g2dJgLGpxQIssshGKIocbSNSPk=" alt="My Image" />
            </div>

          </div>
          <div className="card-2">
            <h2>Our Working Hours</h2>
            <p>Monday - Fridays : &emsp;&emsp;9:00 AM - 9:00 PM<br />Weekends : &emsp;&emsp;&emsp;&emsp;&emsp;9:00 AM - 9:00 PM</p>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
