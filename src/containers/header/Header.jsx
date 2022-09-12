import React from 'react'
import './header.css'
import im1 from '../../assets/Image.png'

const Header = () => {
  return (
    <div className='travel__header'>
      <div className='travel__header-content'>
        <p>Best destinations around the world</p>
        <h1>Travel<span>, enjoy</span><br/>and live a new and full life</h1>
        <p>Built Wicket longer admire do barton vanity itself do in it.Preferred to spotsmen it engrossed listening.Park gate sell they west hard for the.</p>
        <div className='travel__header-content_cta'>
          <button type='button'>Find out more</button>
          <div className='travel__header-content_cta-demo'>
              <div/>
            <p>Play Demo</p> 
          </div>
        </div>
      </div>
      <div className='travel__header-image'>
        <img src={im1} alt='im1'/>
      </div>
    </div>
  )
}

export default Header

