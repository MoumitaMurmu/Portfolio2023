// import React from 'react'
// // import{BsPatchCheckFill} from 'react-icons/bs'
// import{TfiHtml5} from 'react-icons/tfi'
// import{FaCss3Alt} from 'react-icons/fa'
// import{SiJavascript} from 'react-icons/si'
// import{FaReact} from 'react-icons/fa'
// import{BsFillBootstrapFill} from 'react-icons/bs'
// import{SiTailwindcss} from 'react-icons/si'
// import{FaNodeJs} from 'react-icons/fa'
// import{SiMongodb} from 'react-icons/si'
// import{FaPython} from 'react-icons/fa'
// import{FaJava} from 'react-icons/fa'
// import './experience.css'
// const Experience = () => {
//   return (
//     <section id='experience'>
//       <h5>What Skills I Have</h5>
//       <h2>My Experience</h2>

//       <div className='container experience__container'>
//         <div className='experience__frontend'>
//             <h3>Front-End Development</h3>
//            {/* <div className='experience__content'>
//               <article className='experience__details'>
//                <TfiHtml5 className='experience__details-icon'/>
//                <div>
//                <h4>HTML</h4>
//                <small className='text-light'>Experienced</small>
//                </div>
                
               
//               </article>
//               <article className='experience__details'>
//                <FaCss3Alt className='experience__details-icon'/>
//                <div>
//                <h4>CSS</h4>
               
//                <small className='text-light'>Intermediate</small>
//                </div>
         
//               </article>
//               <article className='experience__details'>
//                <SiJavascript className='experience__details-icon'/>
//                <div>
//                <h4>JAVASCRIPT</h4>
               
//                <small className='text-light'>Intermediate</small>
//                </div>
   
//               </article>
//               <article className='experience__details'>
//                <BsFillBootstrapFill className='experience__details-icon'/>
//                <div>
//                <h4>BOOTSTRAP</h4>
               
//                <small className='text-light'>Experienced</small>
//                </div>
           
//               </article>
//               <article className='experience__details'>
//                <SiTailwindcss className='experience__details-icon'/>
//                <div>
//                <h4>TAILWIND</h4>
               
//                <small className='text-light'>Experienced</small>
//                </div>
   
//               </article>
//               <article className='experience__details'>
//                <FaReact className='experience__details-icon'/>
//                <div>
//                <h4>REACT.JS</h4>
//                <small className='text-light'>Intermediate</small>
//                </div>
              
            
//               </article>
//             </div> 
//             */}
//             <article
//   className={`experience__details`}
//   onClick={(e) => e.currentTarget.classList.toggle("flip")}
// >
//   <div className="experience__details-front">
//     <TfiHtml5 className="experience__details-icon" />
//     <h4>HTML</h4>
//     <small className="text-light">Experienced</small>
//   </div>
//   <div className="experience__details-back">
//     <h4>Frontend Technologies</h4>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       {/* Add more frontend technologies here */}
//     </ul>
//   </div>
// </article>

//         </div>
//         {/* BACKEND PART */}
//         {/* <div className='experience__backend'>
//         <h3>Back-End Development</h3>
//         <div className='experience__content'>
//              <article className='experience__details'>
//              <FaNodeJs className='experience__details-icon'/>
//              <div>
//              <h4>Node.js</h4>
              
//              <small className='text-light'>Beginner</small>
//              </div>
            
//               </article> 
//               <article className='experience__details'>
//              <SiMongodb className='experience__details-icon'/>
//              <div>
//              <h4>MongoDB</h4>
              
//              <small className='text-light'>Beginner</small>
//              </div>
            
//               </article> 
//               <article className='experience__details'>
//              <FaPython className='experience__details-icon'/>
//              <div>
//              <h4>Python</h4>
              
//              <small className='text-light'>Beginner</small>
//              </div>
            
//               </article> 
//               <article className='experience__details'>
//              <FaJava className='experience__details-icon'/>
//              <div>
//              <h4>JAVA</h4>
              
//              <small className='text-light'>Beginner</small>
//              </div>
            
//               </article> 
//         </div>
//         </div> */}
//       </div>
//     </section>
//   )
// }

// export default Experience;

import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
  const [isFrontEndFlipped, setFrontEndFlipped] = useState(false);
  const [isBackEndFlipped, setBackEndFlipped] = useState(false);

  const toggleFrontEndFlip = () => {
    setFrontEndFlipped(!isFrontEndFlipped);
  };

  const toggleBackEndFlip = () => {
    setBackEndFlipped(!isBackEndFlipped);
  };

  return (
    <section id='experience'>
    <span style={{fontFamily: 'Tangerine', fontSize:'25px', color:'var(--color-light)'}}>Hover The Cards Below To See <span style={{color:'yellowgreen'}}>What Skills I Have &#129303;</span> </span>

    <div className="artboard">

      {/* Front-End Card */}
      <div className={`skillcard ${isFrontEndFlipped ? 'flip' : ''}`} onClick={toggleFrontEndFlip}>
        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Front-End Skills</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>Advanced HTML, CSS, and JS</li>
              <li>CSS Frameworks(Material UI, Bootstrap)</li>
              <li>JS Frameworks(React.js)</li>
              <li>Version Control (Git & Github)</li>
              <li>Responsive Web Design</li>
              <li> Animations</li>
            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              <p className="card__subject">Front-End Development</p>
              <p className="card__title">Hello Frontend!</p>
            </div>
          </div>
        </div>
      </div>
  {/* Add some space between the cards */}
      <h2 style={{textShadow: '5px 5px 8px rgba(0, 0, 0, 0.6)'}}>My Experience<span style={{color:'red', fontSize:'50px',  textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)'}}> .</span></h2>


      {/* Back-End Card */}
      <div className={`skillcard ${isBackEndFlipped ? 'flip' : ''}`} onClick={toggleBackEndFlip}>
        <div className="card__side card__side--back">
          <div className="card__cover">
            <h4 className="card__heading">
              <span className="card__heading-span">Back-End Skills</span>
            </h4>
          </div>
          <div className="card__details">
            <ul>
              <li>Server-side Programming(Java)</li>
              <li>Database Management(NoSQL)</li>
              <li>API Development and Integration</li>
              <li>Server Deployment and Hosting</li>
              <li>Authentication</li>

            </ul>
          </div>
        </div>

        <div className="card__side card__side--front">
          <div className="card__theme">
            <div className="card__theme-box">
              <p className="card__subject">Back-End Development</p>
              <p className="card__title">Hello Backend!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experience;

