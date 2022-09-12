import React from 'react'
import './picture.css'

const Picture = ({_i,className,toggle}) => {
 const style={
  mixBlendMode:className?'normal':'luminosity'
 }
  return (
    <div  className='travel__logos-div' onMouseEnter={toggle}>
      <img style={style} src={`images/L${_i+1}.png`} alt={`L${_i+1}`} />
      {className && <div className={className}></div>}  
    </div>
  )
}

export default Picture