import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import TextForm from './components/TextForm';

function App() {
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

