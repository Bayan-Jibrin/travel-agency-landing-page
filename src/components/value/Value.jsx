import React from 'react'
import './value.css'

const Value = ({icon,title,text,background,_width,_height,_top,_left}) => {
  return (
    <div className='travel__booktrip-steps_Values-container'>
      <div className='travel__booktrip-steps_Values-container_image' style={{backgroundColor:background}}>
        <img src={icon} alt="icon" style={{width:_width,height:_height,top:_top,left:_left}}/>
      </div>
      <div className='travel__booktrip-steps_Values-container_text'>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default Value
