import React from 'react';
import Backend from './Backend';
import './experience.css';
import Frontend from './Frontend';

const Experience = () => {
  return (
<section id='experience'>
  <h5>The Skills I Have</h5>
  <h2>My Experience</h2>

  <div className="container experience__container">
    <div className="experience__frontend">
      <h3>Frontend Development</h3>
      <div className="experience__content">
        <Frontend />
      </div>
    </div>
    <div className="experience__backend">
      <h3>Backend Development</h3>
      <div className="experience__content">
        <Backend />
      </div>
    </div>
  </div>
</section>  )
}

export default Experience