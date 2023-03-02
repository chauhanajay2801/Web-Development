import React, { useState } from 'react'

function HookCounter2() {
  
  const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () =>{
              setCount(prevCount => prevCount+5)
    }
    
  return (
    <div>
        Count:{count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
        <button onClick={incrementFive }>Increment five</button>
    </div>
  )
}

export default HookCounter2