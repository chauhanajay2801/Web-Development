import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  const [darkmode,setdarkmode]=useState(false);//state variable that gives info that dark mode is enable or  not?
  return (
   <>

<Navbar/>
{/* <About/> */}
<div className="container">
<TextForm heading = "Enter the text to analyze below"/>
</div>
   </>
   
  );
}

export default App;


