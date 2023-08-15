

import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Loader from './Components/Loader/Loader';
import Project from './Components/Project/Project';
import Logo from './Components/Logo/Logo';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate some asynchronous data fetching or setup tasks
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the duration as per your requirements
  }, []);

  return (
    <div className="App">
    
  
    {isLoading ? (
       <Loader/>
      ) : (
      <div>
      <Logo/>
        <Header />
       <Nav/>  
      <About/>
      <Experience/> 
       <Project/> 
      
   <Contact/>
       <Footer/>     
    </div>
      )} 
    </div>
  );
};
      

export default App;



