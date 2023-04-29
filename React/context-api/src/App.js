import { useState, createContext } from 'react';
import Navbar from './Components/Navbar';

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
  <>
  <Navbar/>
  <form>
    <input type={"text"} placeholder='Enter UserName' value={name} onChange={myname}/>
    <input type={"text"} placeholder='Enter a colorName' value={color} onChange={myColor}/>
  </form>
  </>
  );
}

export default App;
