import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterLine } from 'react-icons/ri';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiFacebook } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineReddit } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import { FiChrome } from 'react-icons/fi';
import { DiFirefox } from 'react-icons/di';
import { SiSafari } from 'react-icons/si';
import { Fade } from "react-awesome-reveal";



const Clients = () => {
  return (

    <div className='hidden-container'>
      <Fade duration="3000" triggerOnce={true}><h3>Clients</h3></Fade>
      <p>Examples</p>
      <div className='client-container'>
        <AiOutlineYoutube alt='coming soon' className='client-logo' />
        <SiSafari alt='coming soon' className='client-logo' />
        <FiInstagram alt='coming soon' className='client-logo' />
        <RiTwitterLine alt='coming soon' className='client-logo' />
        <GrLinkedinOption alt='coming soon' className='client-logo' />
        <FiFacebook alt='coming soon' className='client-logo' />
        <DiFirefox alt='coming soon' className='client-logo' />
        <FiGithub alt='coming soon' className='client-logo' />
        <AiOutlineReddit alt='coming soon' className='client-logo' />
        <FaPinterestP alt='coming soon' className='client-logo' />
        <FiChrome alt='coming soon' className='client-logo' />
      </div>
    </div>
  )
}

export default Clients
