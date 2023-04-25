import React from 'react'

function Bard({myname,list,details}) {
    // console.log(props);
  return (
    <>
     this is Bard
    <div>myname</div>
    <h1>{details.gender}</h1>
    <h1>{details.name?.first}</h1>
    <ul>
    {list.map(l => (<li key={l}>{l}</li>))}    
    </ul> 
    </>
  )
}

export default Bard