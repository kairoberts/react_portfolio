import React from 'react';
import Swiper from './Swiper';
import { Fade } from "react-awesome-reveal";


const Portfolio = () => {
  return (
    <div className='box-container' id='portfolio'>
      <div className='client-outline' ></div>
      <div className='content-container'>
        <Fade duration="2000" triggerOnce={true}><h1>Portfolio</h1></Fade>
        <Fade direction="up" duration="3000" triggerOnce={true}>
          <div className='carousel-container'>
            <br />
            <Swiper />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Portfolio