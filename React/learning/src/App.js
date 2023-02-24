import './App.css';
// import Inline from './components/Inline';
// import Stylesheet from './components/Stylesheet';
// import NameList from './components/NameList';
import styles from './appStyles.module.css'
import './appStyles.css'

function App() {
  return (
    <div className="App">
     {/* <NameList/> */}
     {/* <Stylesheet primary={true}/> */}
     {/* <Inline /> */}
  <h1 className='error'>Error</h1>
  <h1 className={styles.success}>Success</h1>
     </div>
  );
  }

export default App;
