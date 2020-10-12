import React from 'react';
import Logo from './Images/logo.png';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';



const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className='navbar-container' id='navbar'>

      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-95}
        duration={800}
        className='navbar-links'
        id='shrink-links'
      ><p>About</p></Link>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-95}
        duration={800}
        className='navbar-links'
        id='shrink-linkss'
      ><p>Portfolio</p></Link>
      <img
        src={Logo} alt='Moncler' className='logo' id='shrink-logo' onClick={() => scroll.scrollToTop()}
      ></img>
      <Link
        activeClass="active"
        to="testimonials"
        spy={true}
        smooth={true}
        offset={-95}
        duration={800}
        className='navbar-links'
        id='shrink-linksss'
      ><p>Testimonials</p></Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-95}
        duration={800}
        className='navbar-links'
        id='shrink-linkssss'
      ><p>Contact</p></Link>
    </motion.div>

  )
}

export default Navbar