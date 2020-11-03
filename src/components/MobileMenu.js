import React from "react";
import { Link } from 'react-scroll';
import Logo from './Images/logo.png';
import { animateScroll as scroll } from 'react-scroll';
import { stack as Menu } from 'react-burger-menu'
import { BiMenuAltLeft } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import { CgMenuMotion } from 'react-icons/cg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { SiInstagram } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';



class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }


  render() {
    return (
      <div className='mobile-nav' id='mob-nav' >
        <div className='mobile-container'>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            customBurgerIcon={<BiMenuAltLeft />}
            customCrossIcon={<VscChromeClose />}>
            <img src={Logo} alt='Moncler' className='mobile-logo' onClick={() => scroll.scrollToTop()}></img>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              className='navbar-links'
              onClick={() => this.closeMenu()}
            ><CgMenuMotion size={30} /> About Me</Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              className='navbar-links'
              onClick={() => this.closeMenu()}
            ><CgMenuMotion size={30} /> Portfolio</Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              className='navbar-links'
              onClick={() => this.closeMenu()}
            ><CgMenuMotion size={30} /> Testimonials</Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={600}
              className='navbar-links'
              onClick={() => this.closeMenu()}
            ><CgMenuMotion size={30} /> Contact</Link>
            <div className='flex-item'>
              <a href='https://www.instagram.com/_kairoberts' className='icons'><SiInstagram size={30} /></a>
              <a href='https://www.linkedin.com/in/kairobertss' className='icons'><AiOutlineLinkedin size={35} /></a>
              <a href='https://github.com/kairoberts' className='icons'> <FiGithub size={30} /></a>
            </div>
          </Menu>
        </div>
      </div>
    )
  }
}


export default MobileMenu;