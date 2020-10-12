import React from 'react';
import Feedback from './Feedback';
import { Fade } from "react-awesome-reveal";


const Testimonials = () => {
  return (
    <div className='box-container' id='testimonials'>
      <div className='client-outline' ></div>
      <div className='content-container'>
        <Fade duration="3000" triggerOnce={true}><h1>Testimonials</h1></Fade>
        <Fade direction="right" duration="3000" triggerOnce={true}>
          <div className='feedback-container'>
            <Feedback />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Testimonials