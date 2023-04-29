import Navbar from './Components/Navbar';

function App() {

  const [name, setname] = useState("");
  const [color, setColor] = useState("");


  return (
  <>
  <h1>Hey</h1>
  <Navbar/>
  <form>
    <input type={"text"} placeholder='Enter UserName' value={name} onChange={myname}/>
    <input type={"text"} placeholder='Enter a colorName' value={color} onChange={myColor}/>
  </form>
  </>
  );
}

export default App;
