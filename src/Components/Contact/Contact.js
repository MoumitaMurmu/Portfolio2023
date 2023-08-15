import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import{MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i25pecs', 'template_h8tg45u', form.current, 'hyRFp_2xTaGdtnXFy')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5 style={{fontFamily: 'Tangerine', fontSize:'30px', textAlign:'left', marginLeft:'10rem'}}>~ Get <span style={{color:'yellowgreen'}}>In</span>  Touch ~</h5>
      <h2 style={{textShadow: '5px 5px 8px rgba(0, 0, 0, 0.6)'}}>Contact <span style={{color:'yellowgreen'}}>Me.</span></h2>

      <div className='container contact__container'>
        <div className='contact__options'>
           <article className='contact__option glow-on-hover'>
           <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>mmoumita202016@gmail.com</h5>
             <a href='mailto:mmoumita202016@gmail.com' target='_blank' style={{ cursor: 'pointer'}}>Send a Message</a>

           </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Enter Your Full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Write Your message here...' required></textarea>
        {/* <button type='submit' className='btn btn-primary'>Send Message</button> */}
        <button type='submit' id="button-1" class="button">Send Message<img id="arrow-hover" src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"/></button>

        </form>
      </div>
    </section>
  )
}

export default Contact;