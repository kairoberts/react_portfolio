import React from 'react';
import { Link } from 'react-scroll';
import WebDeploy from './WebDeploy';
import CodeSVG from './CodeSVG';
import UIDesignSVG from './UIDesignSVG';
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
          <UIDesignSVG alt='UI Design' className='links-img' />
          <h1>Design</h1>
          <p>The first step to creating your website is through UI Design, deciding how you want it to look and feel.</p>
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
          <h1>Develop</h1>
          <p>Once the design process is complete, the next step is to develop your website to match your designs.</p>
        </motion.div>
      </Link>

      <div className='border-outline' ></div>

      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-110} duration={600} className='child-links'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <WebDeploy alt='Deployment' className='links-img' />
          <h1>Deploy</h1>
          <p>The final step is to publish your website online for everyone to see.</p>
        </motion.div>
      </Link>
    </div>

  )
}

export default ImageLinks