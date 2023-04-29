import { useState, createContext } from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';

export const myContext = createContext();

function App() {

  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myname = (event) =>{
    setName (event.target.value); 
  };
 
  const myColor = (event) =>{
    setColor (event.target.value); 
  };

  return (
  <myContext.Provider value={{name,color}}>
  <Navbar/>
  <form>
    <input type={"text"} placeholder='Enter UserName' value={name} onChange={myname}/>
    <input type={"text"} placeholder='Enter a colorName' value={color} onChange={myColor}/>
  </form>
  <HeroSection/>
  </myContext.Provider>
  );
}

export default App;
