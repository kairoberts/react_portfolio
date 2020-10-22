import React from 'react';
import { Link } from 'react-scroll';
import VideoSVG from './VideoSVG';
import CodeSVG from './CodeSVG';
import UXDesignSVG from './UXDesignSVG';
import { motion } from 'framer-motion';

const ImageLinks = () => {

  return (
    <div className='links-container'>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-110} duration={600} className='child-links'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <UXDesignSVG alt='UX Design' className='links-img' />
          <h1>UX/UI Design</h1>
          <p>Need help designing your website? I can assist with that. Click here to get in touch.</p>
        </motion.div>
      </Link>

      <div className='border-outline' ></div>

      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-110} duration={600} className='child-links'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <CodeSVG alt='Web Development' className='links-img' />
          <h1>Web Development</h1>
          <p>Do you want a professional, afforable website that looks elegant from top to bottom? Then click to get in touch.</p>
        </motion.div>
      </Link>

      <div className='border-outline' ></div>

      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-110} duration={600} className='child-links'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <VideoSVG alt='Video Editing' className='links-img' />
          <h1>Video Editing</h1>
          <p>Coming soon... Click to get in touch and find out more.</p>
        </motion.div>
      </Link>
    </div>

  )
}

export default ImageLinks