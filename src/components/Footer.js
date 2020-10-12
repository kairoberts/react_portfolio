import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { Fade } from "react-awesome-reveal";


const Footer = () => {
  return (
    <footer>
      <div className='icons-container'>
        <div className='flex-item'>
          <h5>Social Media:</h5>
          <a href='https://www.instagram.com/_kairoberts' className='icons'><SiInstagram size={30} /></a>
          <a href='https://www.linkedin.com/in/kairobertss' className='icons'><AiOutlineLinkedin size={35} /></a>
          <a href='https://github.com/kairoberts' className='icons'> <FiGithub size={30} /></a>
          <Fade direction="right" duration="2000" triggerOnce={true}><div>&copy; 2020 KR Web Development. All Rights Reserved.</div></Fade>
        </div>
      </div>
    </footer>

  )
}

export default Footer