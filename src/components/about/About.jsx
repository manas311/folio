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
            <img src='/static/me-about.png' alt="about me pic" />
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

          <p>Hi, My name is Manas Tewari, Engineer by education and Web Developer by profession. 
            I am an aspiring full stack web developer, living in Uttarakhand, India. 
            I am hard working and passionate towards my work.
            I have done my Engineering (Bachelor of Technology) from Birla Institute of Applied Sciences
             in the branch Computer Science Engineering (CSE)</p>
        
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About