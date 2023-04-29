import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { Routes,Route } from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('light');//state variable that gives info that dark mode is enable or  not?
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
          setAlert({
            msg:message,
            type:type

          })
          setTimeout(() => {
            setAlert(null)
          }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){

      setMode('dark')
      document.body.style.backgroundColor = '#242c52';
      showAlert("Dark mode has been enabled","success");
      document.title = "Wordmaster-Darkmode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "Wordmaster-Lightmode";

    }
  }
 

  
  return (
    <>
 
   <Navbar title='Textuils' mode={mode} toggleMode={toggleMode} />
   <Alert alert ={alert}/>
   <Routes>
   <Route exact path = "/about" element={<About/>}/>
   <Route exact path = "/" element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode={mode}/>}/>
  </Routes>
    </>
       

    

   
  );
}

export default App;





