import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoYoutube } from 'react-icons/io';


const Clients = () => {
  return (

    <div className='hidden-container'>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >Clients</motion.h3>
      <div className='client-container'>
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
        <IoLogoYoutube alt='coming soon' className='client-logo' />
      </div>
    </div>
  )
}

export default Clients
