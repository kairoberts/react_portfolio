import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { BsPerson } from 'react-icons/bs';

const Feedback = () => {
  return (
      <OwlCarousel
        className="owl-theme"
        items="2"
        nav={false}
        autoplay={false}
        dots={true}
      >
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 1</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 2</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 3</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 4</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 5</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 6</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 7</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 8</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
        <div className='card'>
          <BsPerson alt='Profile Picture' className='card-image'></BsPerson>
          <div className='card-feedback'>
            <h6>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quis nisi vel molestie. Aliquam sed justo at leo volutpat iaculis auctor sed tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus scelerisque dapibus lorem vel accumsan."</h6>
            <h1>Name 9</h1>
            <h6>Job Title here</h6>
          </div>
        </div>
      </OwlCarousel>
  )
}

export default Feedback
