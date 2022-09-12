import React from 'react'
import './service.css'

const Service = ({_id,title,text,_className,toggle,_MP,_MC,_width}) => {
  const classes='travel__services-container_service '+_className;
  let W;
  if(_id===1&&_className)
      W='max(22.638%,147.8px)';
  else if (_id===1 && !(_className))
      W='max(15.472%,101.012px)';
  else if (_id!==1 && !(_className))
      W='max(14.739%,96.225px)';
  else
      W='max(21.905%,143.012px)';

  return (
    <div className={classes} onClick={toggle} style={{marginTop:_MC,width:W}} >
        <img src={`images/service${_id}.png`} alt={`service${_id}`} style={{width:_width}}/>
        <h4 style={{marginTop:_MP}}>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Service