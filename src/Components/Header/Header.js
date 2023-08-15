                  
import React, { useState } from 'react';
import './header.css';
import ME from '../../Assests/me.png';
import HeaderSocial from './HeaderSocial';
import { motion } from 'framer-motion';
// import page from '../../Assests/page.gif';
import {TbArrowRightTail} from 'react-icons/tb';
import Welcome from '../Common/Welcome/Welcome';

const Header = () => {
  const [showResults, setShowResults] = useState(true);
  // const onClick = () => setShowResults(false);


   return (
    <header>
    <HeaderSocial />
     <div className='container header__container'>
        
         {/* <div style={{ position: 'relative', display: 'inline-block', right: '25rem', bottom: '2rem' }} className='book'>
      <motion.img
        initial={{ y: -50 }} // Initial position at y=-50 (above the starting position)
        animate={{
          y: [0, -16, 0], // Vertical floating movement: it will move up, then down, and return to its initial position
        }}
        transition={{
          duration: 3, // The duration of the animation
          repeat: Infinity, // Make the animation repeat indefinitely
          ease: 'easeInOut', // Adjust the easing of the animation
        }}
        src={page}
        alt='page'
        style={{ height: '250px', width: '250px' }}
      /> 
      <p className='headingIntro' style={{ position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)', zIndex: '1', textAlign: 'center' }}>
        <span></span>
        <strong style={{ color: '#fff' }}> .</strong>
      </p>
     </div>  */}
     <Welcome/>

       {/* <Typing/> */}

       {showResults ?
          <motion.div
            className="idCard"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ rotate: -3, scale: 1.05, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}
           
          >
            <motion.div
              className='idCardTop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1 style={{fontSize: "70px", marginBottom:"2.5rem"}}>
                <strong style={{ color: "#FE5E58" }}> .</strong>
              </h1>
              <h1 style={{fontSize: "70px",marginBottom:"2.5rem"}}>
                <strong style={{ color: "#FEBD2C" }}>.</strong>
              </h1>
              <h1 style={{fontSize: "70px",marginBottom:"2.5rem"}}>
                <strong style={{ color: "#27C841" }}> .</strong>
              </h1>
            </motion.div>
            <motion.div
              style={{ display: "flex", alignItems: "center", padding: 8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.img
                src={ME}
                className="dp"
                style={{ height: "160px", width: "160px" }}
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                whileTap={{ scale: 1.55 }}
              />
              <motion.div
                className="idText"
                style={{ padding: "20px" }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <h1 style={{ fontSize: "21px", color: "#fff",  fontWeight: 700 }}>Moumita <span style={{color:'yellowgreen'}}>Murmu</span></h1>
                <h3
                  style={{
                   
                    opacity: 0.5,
                    marginTop: 5,
                    fontSize: "13px",
                    
                    color:"#fff",
                    fontWeight: 500
                  }}
                >
                 <span style={{color:'yellow'}}> B.TECH </span>In CSE @ NSHM
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
          : <br />
        } 

      

      </div> 
      <a href="#contact" className='scroll__down'>
      <span style={{color:'yellow'}}>S</span>
      <span style={{color:'sky'}}>C</span>
      <span style={{color:'yellow'}}>R</span>
      <span style={{color:'aqua'}}>O</span>
      <span style={{color:'gold'}}>L</span>
      <span style={{color:'tomato'}}>L</span>
      <span>D</span>
      <span style={{color:'gold'}}>O</span>
      <span style={{color:'aqua'}}>W</span>
      <span style={{color:'yellow'}}>N</span>
      <TbArrowRightTail/>
      </a>  

    </header>
  )
}

export default Header;



