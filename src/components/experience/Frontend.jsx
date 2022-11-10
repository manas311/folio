import React from 'react';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import './experience.css';


const Frontend = () => {
  return (
    <>
        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Tailwind</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React.js</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
    </>
  )
}

export default Frontend