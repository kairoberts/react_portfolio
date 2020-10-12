import React from 'react';
import ContactForm from './ContactForm';
import { Fade } from "react-awesome-reveal";


const OtherStuff = () => {
  return (
    <div className='box-container' id='contact'>
      <div className='client-outline' ></div>
      <div className='content-container'>
        <Fade duration="3000" triggerOnce={true}><h1>Get In Touch</h1></Fade>
        <Fade direction="up" duration="3000" triggerOnce={true}>
        <div className='form-container'>
          <ContactForm />
        </div>
        </Fade>
      </div>
    </div>

  )
}

export default OtherStuff