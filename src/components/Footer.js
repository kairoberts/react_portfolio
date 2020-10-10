import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer>
      <div className='icons-container'>
        
        <div className='flex-item'>
          <h5>Social Media:</h5>
          <a href='https://www.instagram.com/_kairoberts' className='icons'><SiInstagram size={30} /></a>
          <a href='https://www.linkedin.com/in/kairobertss' className='icons'><AiOutlineLinkedin size={35} /></a>
          <a href='https://github.com/kairoberts' className='icons'> <FiGithub size={30} /></a>
          <div>&copy; 2020 KR Web Development. All Rights Reserved.</div>
        </div>
      </div>
    </footer>

  )
}

export default Footer