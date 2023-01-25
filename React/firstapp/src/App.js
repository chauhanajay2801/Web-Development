import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  const [mode,setMode]=useState('light');//state variable that gives info that dark mode is enable or  not?
  const toggleMode = ()=> {
    if(mode === 'light'){

      setMode('dark')
      document.body.style.backgroundColor = '#242c52';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';

    }
  }
 


  return (
    <>
    <Navbar title='Textuils' mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <TextForm heading = "Enter the text to analyze below" mode={mode}/>
    </div>
    </>
   
  );
}

export default App;


