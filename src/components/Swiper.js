import React from 'react'
import { Carousel } from '3d-react-carousal';
import { Button } from 'react-bootstrap';
import comingSoon from './Images/comingsoon.jpg';

const Swiper = () => {
  let slides = [
    <div className='swiper-info'>
      <img src={comingSoon} alt="1" />
      <h3 className="h3-responsive">Website name here</h3>
      <p>Information about the website here</p>
      <div className='swiper-btn'>
        <Button variant="outline-dark">Visit Website</Button>
      </div>
    </div>,
    <div className='swiper-info'>
      <img src={comingSoon} alt="1" />
      <h3 className="h3-responsive">Website name here</h3>
      <p>Information about the website here</p>
      <div className='swiper-btn'>
        <Button variant="outline-dark">Visit Website</Button>
      </div>
    </div>,
    <div className='swiper-info'>
      <img src={comingSoon} alt="1" />
      <h3 className="h3-responsive">Website name here</h3>
      <p>Information about the website here</p>
      <div className='swiper-btn'>
        <Button variant="outline-dark">Visit Website</Button>
      </div>
    </div>,
    <div className='swiper-info'>
      <img src={comingSoon} alt="1" />
      <h3 className="h3-responsive">Website name here</h3>
      <p>Information about the website here</p>
      <div className='swiper-btn'>
        <Button variant="outline-dark">Visit Website</Button>
      </div>
    </div>,
    <div className='swiper-info'>
      <img src={comingSoon} alt="1" />
      <h3 className="h3-responsive">Website name here</h3>
      <p>Information about the website here</p>
      <div className='swiper-btn'>
        <Button variant="outline-dark">Visit Website</Button>
      </div>
    </div>];

  return (
    <Carousel slides={slides} autoplay={false} interval={0} />
  );
}

export default Swiper