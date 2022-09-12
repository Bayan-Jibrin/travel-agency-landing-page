import React from 'react'
import './footer.css'
import {apple,googleplay,T1,T2,facebookicon,instagramicon,twittericon} from './imports'

const Footer = () => {
  return (
    <div className='travel__footer '>
      <div className='travel__footer-links'>
        <div className='travel__footer-links_text'>
          <p>Jadoo.</p>
          <p>Book your trip in minute,get full<br/>Control for much longer.</p>
        </div>
        <div className='travel__footer-links_div'>
          <div>
            <h6>Company</h6>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
          <div>
            <h6>Contact</h6>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affilates</p>
          </div>
          <div>
            <h6>More</h6>
            <p>Airlinefees</p>
            <p>Airline</p>
            <p>Low Fare tips</p>
          </div>
        </div>
        <div className='travel__footer-links_outband'>
          <div className='travel__footer-links_outband-social'>
            <div><img src={facebookicon} alt="facebookicon" /> </div>
            <div><img src={instagramicon} alt="instagramicon"/></div>
            <div><img src={twittericon} alt="twittericon"/></div>  
          </div>
          <div className='travel__footer-links_outband-discover'>
              <p>Discover our app</p>
              <div className='travel__footer-links_outband-discover-logo'>
                <div className='travel__footer-links_outband-discover-logo_one'>
                  <img src={googleplay} alt="googleplay" />
                  <img src={T1} alt="T1" />
                </div>
                <div className='travel__footer-links_outband-discover-logo_tow'>
                  <img src={apple} alt="apple" />
                  <img src={T2} alt="T2" />
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='travel__footer-copyright'>
        <p>All rights reserved@jadoo.co</p>
      </div>
    </div>
  )
}

export default Footer