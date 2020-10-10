import React from 'react';
import Swiper from './Swiper';

const Portfolio = () => {
  return (
    <div className='box-container' id='portfolio'>
      <div className='client-outline' ></div>
      <div className='content-container'>
        <h1>Portfolio</h1>
        <div className='carousel-container'>
          <br/>
          <Swiper />
        </div>
      </div>
    </div>
  );
}

export default Portfolio