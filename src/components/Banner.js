import React from 'react';
import { Button } from 'react-bootstrap';
import purpleVector from './Images/purpleVector.jpg';
import tynebridge from './Images/tynebridge.jpg';
import cv from './File/KaiRobertsCV.pdf';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';




const Banner = () => {
  return (
    <motion.div className='contain-banner' id='fade'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
    >
      <img src={purpleVector} alt='purpleVector' className='logo-banner'></img>
      <img src={tynebridge} alt='tynebridge' className='banner-bridge'></img>
      <div className='banner-info'>
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 2, type: 'spring', stiffness: 150 }}
        >Aspiring Full Stack Developer</motion.h1>
        <motion.h3
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 3, type: 'spring', stiffness: 150 }}
        >A Message To Visitors:</motion.h3>
        <motion.p
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 3, type: 'spring', stiffness: 150 }}
          className='responsive-font'>Please note that this website is still in development, so things like responsiveness and the contact form are not fully complete yet. Thank you, Kai.</motion.p>

        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-110} duration={600} ><Button
          variant="outline-light" className='btn-container'>Get In Touch</Button></Link>

        <Button variant="outline-light" className='btn-container' href={cv} download='KaiRobertsCV'>Download CV</Button>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-95}
          duration={800}
        ><div className='scroll-arrow' >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>

      </div>
    </motion.div>

  )
}

export default Banner