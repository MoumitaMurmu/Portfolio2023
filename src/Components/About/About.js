
import React from 'react'
import './AboutMePara.scss'
import { motion } from 'framer-motion';
import ME from "../../Assests/me-about.jpg";

import './about.css';
const About = () => {
  return (
    <section id='about' >
       <h5 style={{fontFamily: 'Tangerine', fontSize:'30px'}}>~Get To <span style={{color:'yellowgreen'}}>Know</span>~</h5>
     
   
   
    <div className='about-me-para-body'>
   
            <div class="about-me-para-card-container">
                    <div class="about-me-para-card">
                        <h3 style={{color:'yellow'}}>About me.</h3><br/>
<p>Frontend Web Developer with a B.Tech in CSE. Skilled in UI/UX design and App Development. Blend of creativity from Sketching and Dance. Committed learner, integrating new Tech for impactful solutions.</p>                            <div class="layers">
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>
                                <div class="layer"></div>   
                            </div>
                    </div> 
            </div>

   
            <div className='about__me'>
              <div className='about__me-image'>
                <motion.img // Wrap the image with the motion.img component
                  initial={{ y: -50 }} // Initial position at y=-50 (above the starting position)
                  animate={{
                    y: [0, -16, 0], // Vertical floating movement: it will move up, then down, and return to its initial position
                  }}
                  transition={{
                    duration: 3, // The duration of the animation
                    repeat: Infinity, // Make the animation repeat indefinitely
                    ease: "easeInOut", // Adjust the easing of the animation
                  }}
                  src={ME}
                  alt='About Me Image'
                />
              </div>
            </div>
 </div> 
    </section>
  )
}

export default About;