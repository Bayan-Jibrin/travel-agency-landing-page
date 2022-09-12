import React from 'react'
import './destinations.css'
import Destination from '../../components/distination/Distination'
import decore from '../../assets/distinationdecore.png'

const Destinations = () => {
  return (
    <div className='travel__distinations' id='desitnations'>
      <div className='travel__distinations-heading'>
        <h6>Top Selling</h6>
        <h1>Top Destinations</h1>
      </div>
      <div className='travel__distinations-container'>
          <Destination distination="Rome,Italy" cost="$5,42k" numberOfDays="10 Days Trip"/>
          <Destination distination="London,UK" cost="$4.2k" numberOfDays="12 Days Trip"/>
          <div className='travel__distinations-container-decore'>
              <Destination distination="Full Europe" cost="$15k" numberOfDays="28 Days Trip"/>
              <img src={decore} alt="decore" />
          </div>  
      </div>
    </div>
  
  )
}

export default Destinations