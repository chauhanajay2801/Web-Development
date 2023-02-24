import React from 'react'

function Person({person}) {
  return (
    <div><h2>I am {person.name} my age is {person.age} and i know {person.skill}</h2></div>
  )
}
//key prop cant be rendered
// we need key prop because it helps recta to check if there is ansy change regarding the updation and deletion and it plays a crucial role and update efficiently
export default Person