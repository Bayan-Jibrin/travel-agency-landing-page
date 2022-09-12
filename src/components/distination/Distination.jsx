import React from 'react'
import './distination.css'
import navimg from '../../assets/navigation1.png'

const Distination = ({distination,cost,numberOfDays}) => {
  return (
    <div  className='travel__distinations-container_distination'>
       <div className='travel__distinations-container_distination-contain'>
          <div className='travel__distinations-container_distination-contain-text'>
            <p>{distination}</p>
            <p>{cost}</p>
          </div>
          <div className='travel__distinations-container_distination-contain-nav'>
            <img src={navimg} alt="" />
            <p>{numberOfDays}</p>
          </div>  
       </div>   
    </div>)
}
export default Distination