import React from 'react';
import KaiRoberts from './Images/kairob.png';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaPhp } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { GiPencilBrush } from 'react-icons/gi';
import { BsCameraVideo } from 'react-icons/bs';
import { FaGit } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";


const About = () => {
  return (
    <div className='box-container' id='about' >
      <div className='client-outline' ></div>
      <div className='content-container'>
        <Fade duration="3000" triggerOnce={true}><h1>About Myself</h1></Fade>
        <div className='content-info'>
          <Fade direction="left" duration="2000" triggerOnce={true}>
            <img src={KaiRoberts} alt='Kai Roberts' className='kairob'></img>
          </Fade>
          <div className='info-container'>
            <Fade direction="up" duration="2000" triggerOnce={true}>
              <h5>Kai Roberts</h5>
              <h5>2017 – 2020 BSc (Hons) Computer Science (2:1 – 68%), York St. John University.</h5><p className='content-message'>I am a 22 year old Computer Science Graduate, who prides himself on hard work and being self-motivated. I hold relevant work experience in Web Development regarding working alongside a client in designing and developing a webpage for their business. Any of the skills below are constantly being improved on daily.</p>
            </Fade>
            <Fade direction="right" duration="3000" triggerOnce={true}>
              <div className='skills-container'>
                <h2>My Skills:</h2>
                <div className='skill'>
                  <AiFillHtml5 size={55} />
                  <p>HTML (90%)</p>
                </div>
                <div className='skill'>
                  <DiCss3 size={55} />
                  <p>CSS (90%)</p>
                </div>
                <div className='skill'>
                  <IoLogoJavascript size={55} />
                  <p>JavaScript (65%)</p>
                </div>
                <div className='skill'>
                  <FaReact size={50} />
                  <p>React (80%)</p>
                </div>
                <div className='skill'>
                  <BsFillBootstrapFill size={50} />
                  <p>Bootstrap (85%)</p>
                </div>
                <div className='skill'>
                  <FaPhp size={55} />
                  <p>PHP (60%)</p>
                </div>
                <div className='skill'>
                  <SiPython size={55} />
                  <p>Python (60%)</p>
                </div>
                <div className='skill'>
                  <SiMysql size={70} />
                  <p>MySQL (45%)</p>
                </div>
                <div className='skill'>
                  <FaGit size={50} />
                  <p>Git (70%)</p>
                </div>
                <div className='skill'>
                  <GiPencilBrush size={55} />
                  <p>UX Design (65%)</p>
                </div>
                <div className='skill'>
                  <BsCameraVideo size={55} />
                  <p>Final Cut Pro X (30%)</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About