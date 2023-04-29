import { useState } from "react";

function SuperHeroes(){
  const [hero,setHero] = useState(["Superman","Spiderman","Ironman"])
  const [name,setName] =useState(()=> "antman")

  const onAddName = () => {
    setHero([...hero,name])
    setName("")
  }

  return(
    <div>
      <ul>
        {hero.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

       <input type="text" 
       value={name}
       onChange={(e) => setName(e.target.value)}
       />
       <button onClick={onAddName}>add value</button>

    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(10)

  function oneUp(){
    setCount(count + 1 );
  }

  return(
    <div>
      <button onClick={oneUp}>Count:{count}</button>
      <SuperHeroes/>
    </div>
  )
}

function App() {
  return (
    <>
     <h1>hey</h1>
     <Counter/>
    </>
  
   
  );
}

export default App;
