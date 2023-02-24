import React from 'react'
import Person from './Person'

function NameList() {
    const supply = ['Books','Pen','Notepad','Files']
    const supplyList =  supply.map(supp =><h2>{supp}</h2>)
    const persons = [
        {
       id:1,
       name:'Ajay Chauhan',
       age: 28,
       skill:'React'
        },
        {
       id:2,
       name: 'Tony',
       age:22,
       skill: 'Bootstrap'
        },
        {
       id:3,
       name:'Harris',
       age:30,
       skill: 'Fullstack'
        },
        {
       id:4,
       name:'Rihan',
       age:29,
       skill:'Node.js'
        }
     ]

     const personList = persons.map(person => <Person key={person.id}  person = {person}/> )
   
     return (
    <div>{personList}</div>
  )
}

export default NameList