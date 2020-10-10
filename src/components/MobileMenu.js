import React from "react";
import { Link } from 'react-scroll';
import Logo from './Images/logo.png';
import { animateScroll as scroll } from 'react-scroll';
import { stack as Menu } from 'react-burger-menu'
import { BiMenuAltLeft } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import { CgMenuMotion } from 'react-icons/cg';



const MobileMenu = () => {
  return (
    <div className='mobile-nav' id='mob-nav'>
      <div className='mobile-container'>
        <Menu customBurgerIcon={<BiMenuAltLeft />}
          customCrossIcon={<VscChromeClose />}>
          <img src={Logo} alt='Moncler' className='mobile-logo' onClick={() => scroll.scrollToTop()}></img>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className='navbar-links'
          ><CgMenuMotion size={30} /> About Me</Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className='navbar-links'
          ><CgMenuMotion size={30} /> Portfolio</Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className='navbar-links'
          ><CgMenuMotion size={30} /> Testimonials</Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className='navbar-links'
          ><CgMenuMotion size={30} /> Contact</Link>
        </Menu>
      </div>
    </div>
  )
}

export default MobileMenu;