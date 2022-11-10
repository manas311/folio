import React from 'react';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import './experience.css';


const Backend = () => {
  return (
    <>
        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Node.js</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Mongoose</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SpringBoot</h4>
          <small className='text-light'>Basic</small>
          </div>
        </article>
    </>
  )
}

export default Backend