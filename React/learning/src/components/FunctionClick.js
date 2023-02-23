import React from 'react'

function FunctionClick() {
  function clickHandler() {
    console.log("Button clicked");
  }
    return (
    <div>
        <button onClick={clickHandler}>Click me</button> 
        
    </div>
  )
}

//if we use clickHandler() --> this will render as soon as the pgae starts so that will be much more confusing and of no use.
export default FunctionClick