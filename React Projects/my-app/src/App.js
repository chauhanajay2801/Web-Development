import React from 'react'
import MyHeadin, { MyHeadingList as MeraNaam, MyHeadingList2, MyHeadingList3 } from './components/MyHeading'

function App() {
  return (
    <>
    <div>App</div>
    <MyHeadin/>
    <MeraNaam/>
    <MyHeadingList2/>
    <MyHeadingList3/>
    </>
    
  )
}

//export default can be imported with any name and the other one given will need to be "imported as ""

export default App