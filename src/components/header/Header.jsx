import React from 'react';
import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Manas Tewari</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={'/static/me.png'} alt="me" />
        </div>

        <a href="#portfolio" className='scroll__down'>Projects</a>
      </div>
    </header>
  )
}

export default Header