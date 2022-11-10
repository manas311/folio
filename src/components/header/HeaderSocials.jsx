/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { BsLinkedin , BsGithub , BsFolder2 } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/manas-tewari-166542201/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/manas311" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://manas311.github.io/portfolio" target="_blank" rel="noopener noreferrer"><BsFolder2 /></a>
    </div>
  )
}

export default HeaderSocials