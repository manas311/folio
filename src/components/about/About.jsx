import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {FiUsers} from 'react-icons/fi';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src='/static/me-about.jpg' alt="about me pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years since developing</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ GitHub Project Repositories</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Yet to start freelancing</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias, sunt neque tempora reiciendis deleniti qui. Velit suscipit delectus totam quidem. Temporibus fugit iste nemo sunt ipsa atque ipsam? Quibusdam iste odit, quos deserunt cupiditate obcaecati animi numquam earum rerum?</p>
        
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About