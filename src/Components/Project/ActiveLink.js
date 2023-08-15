import React from 'react';
import './ActiveLink.css'
import podcastplat from '../../Assests/podacastmicPro.png';
import crypto from '../../Assests/cryptoLatest.png';
import typing from '../../Assests/typingHand.png';

const ActiveLink = () => {
  return (
    <div className='project-link'>
    <div className="infocardContainer">
  
        {/* For Crypto */}
    
    <div id="main">
        <img src={crypto} alt="Profile"></img>
      </div>
      <div id="textbois">
        <h2 style={{cursor:'text'}}>Insight Coin</h2>
        <h4 style={{cursor:'text'}}>Crypto Master App</h4>
        <div id="hotlinks">
          <a href="https://github.com/MoumitaMurmu/CryptoMasterApp" target="_blank" rel="noopener noreferrer">Source Code</a>
          <a href="https://cryptomaster-react.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
         </div>
      </div>
    </div>
      
{/* For Pocast */}
 <div className='infocardContainer'>
 <div id="main">
   <img src={podcastplat} alt="Profile"></img>
 </div>
 <div id="textbois">
   <h2 style={{cursor:'text'}}>Podcast Platform</h2>
   <h4 style={{cursor:'text'}}>Listen To This With Value</h4>
   <div id="hotlinks">
     <a href="https://github.com/MoumitaMurmu/Podcast-Platform" target="_blank" rel="noopener noreferrer">Source Code</a>
     <a href="https://podcast-platform-m.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
 </div>
 </div>



   {/* For Typing */}
   <div className='infocardContainer'>
   <div id="main">
      <img src={typing} alt="Profile"></img>
    </div>
    <div id="textbois">
      <h2 style={{cursor:'text'}}>Typing Pro</h2>
      <h4 style={{cursor:'text'}}>Unlock Your Typing Potential</h4>
      <div id="hotlinks">
        <a href="https://github.com/MoumitaMurmu/TypingPro" target="_blank" rel="noopener noreferrer">Source Code</a>
        <a href="https://typing-pro-reactjs.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    </div>
   </div>

   </div>
  );
};

export default ActiveLink;
