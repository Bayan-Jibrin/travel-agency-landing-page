import React,{useState} from 'react'
import './testimonials.css'
import '../../components/group/Group'
import Group from '../../components/group/Group'
import items from './data'

const Testimonials = () => {
  const [indexState,setState] =useState(0);

  function add() {
    setState(prevState=>prevState+1);
  }

  function subtract() {
    setState(prevState=>prevState-1)
  }

  const style1 ={
    borderColor:indexState===0 ? '#BCB7C2' :'#3E2E4D'
  }

  const style2 ={
    borderColor:indexState===items.length-1 ? '#BCB7C2' :'#3E2E4D'
  }

  return (
    <div className='travel__Testimonials'>
        <div className='travel__Testimonials-heading'>
            <p>TESTIMONIALS</p>
            <h1>What People Say About Us.</h1>
            <div className='travel__Testimonials-heading_animation'>
              <span></span>
              <span></span>
              <span></span>
            </div> 
        </div>
        <div className='travel__Testimonials-content'>
          <div className='travel__Testimonials-content_sign'>
            <span style={style1} onClick={ indexState>0 && subtract }></span>
            <span style={style2} onClick={indexState<items.length-1 && add}></span> 
          </div>
         <Group _i={indexState+1} _testimonial={items[indexState].testimonial} _name={items[indexState].name} _country={items[indexState].country} />
         {indexState<items.length-1 &&<Group  _testimonial={items[indexState+1].testimonial} _name={items[indexState+1].name} _country={items[indexState+1].country}/> }
        </div>
    </div>
  )
}

export default Testimonials