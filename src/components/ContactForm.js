import React from 'react';
import { Form, Button } from 'react-bootstrap';


const contactForm = () => {
  return (
    <div className='form-container'>
      <Form name="contactForm" >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter Full Name..." name='firstName' />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control type="email" placeholder="Enter Email Address..." />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose An Option:</Form.Label>
          <Form.Control as="select" >
            <option> </option>
            <option>Web Development</option>
            <option>UX Design</option>
            <option>Video Editing (Coming soon)</option>
            <option>Employers</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="Enter Message, 500 Word Limit..."/>
        </Form.Group>
        <Form.Check type="checkbox" label="I consent to be contacted by KR Web Development" className='checkbox'/>
        <br/>
        <Button variant="outline-dark" className='contact-btn'>Send Message</Button>
      </Form>
    </div>
  )
}

export default contactForm