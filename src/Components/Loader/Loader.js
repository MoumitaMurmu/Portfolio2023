import React from 'react';
import './Loader.css';
const Loader = () => {
  return (
    <div className="wrapper-loader">
    <h1 style={{letterSpacing:'8px', fontSize:'18px', color:'var(--color-primary)'}}>LOADING...</h1>
    <div className="cloud">
      <div className="cloud_left"></div>
      <div className="cloud_right"></div>
    </div>
   
    <div className="rain">
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
      <div className="drop"></div>
    </div>
    <div className="surface">
      <div className="hit"></div>
      <div className="hit"></div>
      <div className="hit"></div>
      <div className="hit"></div>
      <div className="hit"></div>
    </div>

  
  </div>
  )
}

export default Loader;