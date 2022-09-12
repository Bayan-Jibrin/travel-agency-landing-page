import React,{useState} from 'react'
import './services.css' 
import Service from '../../components/service/Service' 
import data from './data' 



const Services = () => {
  const [serviceState,changeServiceState] = useState(10)
  
  function toggleActive(index) {
    changeServiceState(index);
  }

  function toggleActiveStyles(index) {
    if(serviceState===index) {
      return 'active__service'
    }
    else {return ''}
  }

  const serviceArray=data.map(item=> 
    (
    <Service key={item.id}
     _id={item.id} 
     title={item.title} 
     text={item.text} 
     _className={toggleActiveStyles(item.id)} 
     toggle={()=>{toggleActive(item.id)}} 
     _MP={item.marginTopP} 
     _MC={item.marginTopC}
     _width={item.width}
     _left={item.left} />
  ))


  return (
    <div className='travel__services' id='flights'>
      <div className="travel__services-heading">
        <h6>CATEGORY</h6>
        <h1>We Offer Best Services</h1>
      </div>
      <div className='travel__services-container'>
        {serviceArray}
      </div>
    </div>
  )
}

export default Services


