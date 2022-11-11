/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { BsFacebook , BsInstagram , BsTwitter , BsLinkedin , BsGithub } from 'react-icons/bs';
import Manas from './logo.png';

const Footer = () => {
  return (
    <footer>
      <a href="#"><img src={Manas} alt="logo" className='logo' /></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100010872887302"><BsFacebook /></a>
        <a href="https://www.instagram.com/manas_tewari_311/"><BsInstagram /></a>
        <a href="https://twitter.com/manastewari311"><BsTwitter /></a>
        <a href="https://www.linkedin.com/in/manas-tewari-166542201/"><BsLinkedin /></a>
        <a href="https://github.com/manas311"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Manas Tewari 2022.</small>
      </div>
    </footer>
  )
}

export default Footer