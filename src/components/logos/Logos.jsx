import React,{useState} from 'react'
import './logos.css'
import Picture from '../picture/Picture'

const Logos = () => {
  const [logoState,changeState] =useState(10);

  function toggleActive(index) {
    changeState(index);
  }

  function toggleActiveStyles(index) {
    if(logoState===index) {
      return 'active__logo';
    }
  }

  const arrayImages=[];
  for (let i = 0; i < 5; i++) {
    arrayImages.push(<Picture key={i} className={toggleActiveStyles(i)}
    toggle={()=> {toggleActive(i)}} _i={i}/>);
  }
  return (
    <div className='travel__logos'>
      {arrayImages } 
    </div>
  )
}

export default Logos
