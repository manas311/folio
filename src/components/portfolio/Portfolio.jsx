/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './portfolio.css';
import data from '../../project.json';

const Portfolio = () => {
  return (
<section id='portfolio'>
  <h5> My Recent Work</h5>
  <h2>Projects</h2>

  <div className="container portfolio__container">
    {
      data.map(({id, title, img, description, gitlink, demolink}) =>{
        return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={img} alt="screensnap of project" />
            </div>
            <h3>{title}</h3>
            <h6>{description}</h6>
            <div className="portfolio__item-cta">
              <a target='_blank' href={gitlink} className='btn' rel="noreferrer">Github Link</a>
              <a target='_blank' href={demolink} className='btn btn-primary' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        )
      })
    }
  </div>
</section>  )
}

export default Portfolio