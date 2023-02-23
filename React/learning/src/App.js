import logo from './logo.svg';
import './App.css';
import Heyjsx from './components/Heyjsx';
import Greet from './components/Greet';


function App() {
  return (
    <div className="App">
     <Heyjsx name = "Ajay" heroname="Batman">
      <p>Hey this is the inner chils and the paragraph element</p>
      </Heyjsx>
     <Heyjsx name = "Bruce" heroname = "Willson">
      <button>Hey</button>
     </Heyjsx>
     <Heyjsx name = "Dwayne" heroname="Johnson"/>

     <Greet name = "Robert downey" heroname="Ironman"/>
     <Greet name = "Bruce Banner" heroname="Hulk"/>
     <Greet name = "Chris Hemsworth" heroname="Thor"/>
  
    </div>
  );
}

export default App;
