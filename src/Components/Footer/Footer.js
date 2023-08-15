import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
import './footer.css'
const Footer = () => {

  return (
   <footer id='footer'>
   

    <div className='waves'>
      <div className='wave' id='wave1'></div>
      <div className='wave' id='wave2'></div>
      <div className='wave' id='wave3'></div>
      <div className='wave' id='wave4'></div>

    </div>
      <a href='#' className='footer__logo'>
     
      <h3 class="animate-charcter"> MOUMITA MURMU.</h3>
      </a> 

     <div className='footer__socials'>
      <a href='https://www.linkedin.com/in/moumita-murmu-832637218/'><BsLinkedin/></a>
      <a href='https://github.com/MoumitaMurmu'><BsGithub/></a>
      <a href='https://twitter.com'><BsTwitter/></a>
     </div>
     <div className='footer__copyright'>
      <small>&copy; MOUMITA. All right reserved.</small>
     </div>
        
   </footer>
  )
}

export default Footer;