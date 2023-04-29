import React, {useState} from "react";

function App() {

  const[count, setCount] = useState(0);

  const decrement = () =>{
    setCount(count-1)
  }

  const increment = () =>{
      setCount(count+1)
  }

  return (
    <div>
    <h1>counter App</h1>
    <div>{count}</div>
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
    </div>)
  
}

export default App;