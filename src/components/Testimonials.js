import React from 'react';
import Feedback from './Feedback';

const Testimonials = () => {
  return (
    <div className='box-container' id='testimonials'>
      <div className='client-outline' ></div>
      <div className='content-container'>
        <h1>Testimonials</h1>
        <div className='feedback-container'>
          <Feedback />
        </div>
      </div>
    </div>
  )
}

export default Testimonials