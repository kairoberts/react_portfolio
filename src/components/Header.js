import React from 'react';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar';
import { IoIosArrowDropup } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll';


const Header = () => {

  window.onscroll = function () { hiddenButton() };
  function hiddenButton() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
      document.getElementById("scroll-btn").style.display = "block";
    } else {
      document.getElementById("scroll-btn").style.display = "none";
    }
    if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470) {
      document.getElementById("header").style.height = "9vh";
      document.getElementById("navbar").style.height = "7vh";
      document.getElementById("shrink-logo").style.height = "60px";
      document.getElementById("shrink-logo").style.width = "150px";
      document.getElementById("shrink-links").style.margin = "2.5vw 2.5vw 2.5vw 2.5vw";
      document.getElementById("shrink-linkss").style.margin = "2.5vw 2.5vw 2.5vw 2.5vw";
      document.getElementById("shrink-linksss").style.margin = "2.5vw 2.5vw 2.5vw 2.5vw";
      document.getElementById("shrink-linkssss").style.margin = "2.5vw 2.5vw 2.5vw 2.5vw";
    } else {
      document.getElementById("header").style.height = "115px";
      document.getElementById("navbar").style.height = "14vh";
      document.getElementById("shrink-logo").style.height = "110px";
      document.getElementById("shrink-logo").style.width = "230px";
      document.getElementById("shrink-links").style.margin = "4vw 2.5vw 2.5vw 2.5vw";
      document.getElementById("shrink-linkss").style.margin = "4vw 2.5vw 2.5vw 2.5vw";
      document.getElementById("shrink-linksss").style.margin = "4vw 2.5vw 2.5vw 2.5vw";
      document.getElementById("shrink-linkssss").style.margin = "4vw 2.5vw 2.5vw 2.5vw";
    }
  }



  return (
    <header id='header'>
      <MobileMenu />
      <Navbar />
      <IoIosArrowDropup id='scroll-btn' onClick={() => scroll.scrollToTop()} />
    </header>

  )
}


export default Header

