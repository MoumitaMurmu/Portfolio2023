import React from 'react';
 import './Project.scss'; 
// import './Project.css'
import ActiveLink from './ActiveLink';
import ProjectVideo from './ProjectVideo';
import crypto3d from '../../Assests/cryptoLatest.png';
import podcast3d from '../../Assests/podacastmicPro.png';
import typing3d from '../../Assests/typingHand.png';
import comingsoon from '../../Assests/comingSoon.png';
import video from '../../Assests/crypto.mp4'

import podcastvideo from '../../Assests/podcast.mp4';
import typingvideo from '../../Assests/typingVideo.mp4';
import {BiRightArrow} from 'react-icons/bi';
const Project = () => {
   
  // const videoUrl = process.env.PUBLIC_URL + '../../Assests/crypto.mp4';
  return (
    <>
<span>
<h2 style={{fontSize:'25px', textShadow: '5px 5px 8px rgba(0, 0, 0, 0.6)'}}>PRO<span style={{color:'yellowgreen', textShadow: '5px 5px 8px rgba(0, 0, 0, 0.6)'}}>JECTS</span> .</h2>
<p style={{fontFamily: 'kalam', fontSize:'15px',  color:'var(--color-light)', textAlign:'left', marginLeft:'5rem'}}>Hover The Left Cards :<span style={{color:'yellowgreen'}}> To See The Live Demo.</span></p>
<p style={{fontFamily: 'Kalam', fontSize:'15px',  color:'var(--color-light)', textAlign:'right', marginRight:'5rem'}}>Click The Arrow Button<BiRightArrow/><span style={{color:'yellowgreen'}}> To Move To The Next Card.</span> <br/>Click On The Right Cards : <span style={{color:'yellowgreen'}}>To See The Content Inside.</span>
</p>

</span>
    <section className='body' id='project'>

     <div>  
       <ActiveLink/>
    </div>
    <div id="wrap">
    {/* Radio inputs */}
      {[...Array(7)].map((_, index) => (
         <input key={index} className="trigger" name="rad" type="radio" checked/>
      ))}
      <input className="trigger" 
      checked="checked" 
      name="rad" 
      type="radio" 
      />

      {/* Innerwrap */}
      <div className="innerwrap" title='Click Me'>
        {/* Checkboxes */}
        {[...Array(8)].map((_, index) => (
          <input key={index} type="checkbox" />
         ))}
        
        {/* Cards */}
        <div className="cards">

          {/* Cardwrap 1 */}
          <div className="cardwrap">
            <div className="card">
           
              <div className="inner">
               <h1><span>Insight Coin</span>Crypto Master App</h1>
               <img src={crypto3d} alt='crypto3d'/>

                <div className="text">
                <video autoPlay loop muted style={{ width: '150px', height: '200px' }}>
                  <source src={video} type="video/mp4" /> 
                </video>
                </div>
                <div className="link">
                  <p>A comprehensive Crypto tracker developed with React, Axios, Framer Motion, and Chart JS, supporting customizable watchlists.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Cardwrap 2 */}
          <div className="cardwrap">
            <div className="card">
              <div className="inner">
                <h1><span>Listen To This With Value</span>Podcast Platform</h1>
                <img src={podcast3d} alt='podcast3d'/>

                <div className="text">
                
                  <video autoPlay loop muted style={{ width: '150px', height: '200px' }}>
                  <source src={podcastvideo} type="video/mp4" /> 
                  </video>
                </div>
                <div className="link">
                  <p>An online podcast platform, featuring podcast CRUD operations, a custom music player, built with React, Firebase, Redux-toolkit, and React Router Dom.</p>
                  </div>
              </div>
            </div>
          </div>
          {/* Cardwrap 3 */}
          <div className="cardwrap">
            <div className="card">
              <div className="inner">
                <h1><span>Test Your Typing Skill</span>Typing Pro</h1>
                <img src={typing3d} alt='typing3d'/>

                <div className="text">
                       
                  <video autoPlay loop muted style={{ width: '150px', height: '200px' }}>
                  <source src={typingvideo} type="video/mp4" /> 
                </video>
                </div>
                <div className="link">
                  <p>An engaging Typing Speed Test website with customizable modes (time and word).Users can log in or sign up using email & password or Google accounts.</p>
                  </div>
              </div>
            </div>
          </div>
          {/* Cardwrap 4 */}
          <div className="cardwrap">
            <div className="card">
              <div className="inner">
              <h1><span>Exciting Developments Await</span>Stay Tuned!</h1>
                <img src={comingsoon} alt='comingsoon'/>
                <div className="text">
                  <p>You'll never know if you don't go You'll never shine if you don't glow</p>
                </div>
                <div className="link">
                  <p>It's a cool place and they say it gits colder</p>
                </div>
              </div>
            </div>
          </div>
          {/* More cardwrap elements... */}
            {/* Cardwrap 5 */}
           <div className="cardwrap">
            <div className="card">
              <div className="inner">
              <h1><span>Exciting Developments Await</span>Stay Tuned!</h1>
                <img src={comingsoon} alt='comingsoon'/>

                <div className="text">
                  <p>So much to do, so much to see</p>
                </div>
                <div className="link">
                  <p>So what's wrong with taking the back streets?</p>
                </div>
              </div>
            </div>
          </div> 
           {/* Cardwrap 6 */}
           <div className="cardwrap">
            <div className="card">
              <div className="inner">
              <h1><span>Exciting Developments Await</span>Stay Tuned!</h1>
                <img src={comingsoon} alt='comingsoon'/>

                <div className="text">
                  <p>So much to do, so much to see</p>
                </div>
                <div className="link">
                  <p>So what's wrong with taking the back streets?</p>
                </div>
              </div>
            </div>
          </div> 


{/* Cardwrap 7 */}
            <div className="cardwrap">
            <div className="card">
              <div className="inner">
              <h1><span>Exciting Developments Await</span>Stay Tuned!</h1>
                <img src={comingsoon} alt='comingsoon'/>

                <div className="text">
                  <p>So much to do, so much to see</p>
                </div>
                <div className="link">
                  <p>So what's wrong with taking the back streets?</p>
                </div>
              </div>
            </div>
          </div> 
           {/* Cardwrap 8 */}
            <div className="cardwrap">
            <div className="card">
              <div className="inner">
              <h1><span>Exciting Developments Await</span>Stay Tuned!</h1>
                <img src={comingsoon} alt='comingsoon'/>

                <div className="text">
                  <p>So much to do, so much to see</p>
                </div>
                <div className="link">
                  <p>So what's wrong with taking the back streets?</p>
                </div>
              </div>
            </div>
          </div> 
          
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default Project;


