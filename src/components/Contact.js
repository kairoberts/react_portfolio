import React from 'react';
import ContactForm from './ContactForm';

const OtherStuff = () => {
  return (
    <div className='box-container' id='contact'>
      <div className='client-outline' ></div>
      <div className='content-container'>
        <h1>Get In Touch</h1>
        <div className='form-container'>
          <ContactForm />
        </div>
      </div>
    </div>

  )
}

export default OtherStuff