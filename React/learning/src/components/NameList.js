import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Books','Pen','Notepad','Files','Pen']
    // const supplyList =  supply.map(supp =><h2>{supp}</h2>)
    // const persons = [
    //     {
    //    id:1,
    //    name:'Ajay Chauhan',
    //    age: 28,
    //    skill:'React'
    //     },
    //     {
    //    id:2,
    //    name: 'Tony',
    //    age:22,
    //    skill: 'Bootstrap'
    //     },
    //     {
    //    id:3,
    //    name:'Harris',
    //    age:30,
    //    skill: 'Fullstack'
    //     },
    //     {
    //    id:4,
    //    name:'Rihan',
    //    age:29,
    //    skill:'Node.js'
    //     }
    //  ]

     const nameList = names.map((name,index) => <h2 key = {index}>{index}{name}</h2> )
     //it is not a good practice to pass index as key because rect changes the value if it is added as first and the value fucks up.
   
     return (
    <div>{nameList}</div>
  )
}

export default NameList