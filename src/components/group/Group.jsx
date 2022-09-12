import React from 'react'
import './group.css'

const Group = ({_i,_testimonial,_name,_country}) => {
  return (
    <div className='travel__Testimonials-content_group'>
        <p>{_testimonial}</p>
        <p>{_name}</p>
        <p>{_country}</p>
        {_i &&<img src={`images/P${_i}.png`} alt={`P${_i}`} />}
    </div>
  )
}

export default Group