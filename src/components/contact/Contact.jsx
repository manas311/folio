import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im'

const Contact = () => {
  return (
<section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineEmail />
        <h4>Email</h4>
        <h5>manastewari311@gmail.com</h5>
        <a href="mailto:manastewari311@gmail.com">Send a Message</a>
      </article>
      <article className="contact__option">
        <BsMessenger />
        <h4>Messenger</h4>
        <h5>Manas Tewari</h5>
        <a href="https://m.me/manastewari311">Send a Message</a>
      </article>
      <article className="contact__option">
        <ImWhatsapp />
        <h4>WhatsApp</h4>
        <h5>(+91) 7351691375</h5>
        <a href="https://api.whatsapp.com/send/?phone=%2B917351691375">Send a Message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <form action=""></form>
  </div>
</section>  )
}

export default Contact