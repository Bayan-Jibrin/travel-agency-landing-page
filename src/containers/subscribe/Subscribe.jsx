import React from 'react'
import './subscribe.css'
import imag from '../../assets/send2.png'

const Subscribe = () => {
  return (
    <div className='travel__subscribe'>
      <div className='travel__subscribe-container'>
        <p>Subscribe to get information, latest news and other interesting offers about Cobham</p>
        <div className='travel__subscribe-container_input' >
          <input type='email' placeholder='Your email'/>
          <button type='button'>Subscribe</button>
        </div>
        <img src={imag} alt=''/> 
      </div>
    </div>
  )
}

export default Subscribe