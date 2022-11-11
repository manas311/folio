import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hk43cul', 'template_cg65mvz', form.current, 'HHRkmqUzW3IZY5X09')
    e.target.reset()
  };

  return (
<section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon' />
        <h4>Email</h4>
        <h5>manastewari311@gmail.com</h5>
        <a href="mailto:manastewari311@gmail.com" target={'_blank'} rel="noreferrer">Send a Message</a>
      </article>
      <article className="contact__option">
        <BsMessenger className='contact__option-icon' />
        <h4>Messenger</h4>
        <h5>Manas Tewari</h5>
        <a href="https://m.me/manastewari311" target={'_blank'} rel="noreferrer">Send a Message</a>
      </article>
      <article className="contact__option">
        <ImWhatsapp className='contact__option-icon' />
        <h4>WhatsApp</h4>
        <h5>(+91) 7351691375</h5>
        <a href="https://api.whatsapp.com/send/?phone=%2B917351691375" target={'_blank'} rel="noreferrer">Send a Message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder='Your Full Name...' required />
      <input type="text" name="subject" placeholder='The Subject...' required />
      <input type="email" name="email" placeholder='Your Email Address...' required />
      <textarea name="message" rows="7" placeholder='Your Message...'></textarea>
      <button type="submit" className='btn btn-primary'>Send Message</button>
    </form>
  </div>
</section>  )
}

export default Contact