import React, { useState } from 'react'

function TodoList() {
  const [activity, setactivity] = useState("")
  const[listData, setlistData] = useState([])
  function addTask(){
    // setlistData([...listData,activity])
    // console.log(listData)
 
    setlistData((listData)=>{
      const updatedList = [...listData, activity]
      setactivity("")
      return updatedList
    })

  }

  function removeActivity(i){
    const updatedListData = listData.filter((elem,id)=> {
      return i!==id;
    })
    setlistData(updatedListData);

  }

  function editActivity(){
    
  }

  function removeAll(){
    setlistData([])
  }

  return (
    <>
    <div>Todo List</div>
    <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setactivity(e.target.value)}/>
    <button onClick={addTask}>Add</button>
    <p>All the tasks for today</p>
    {listData!==[] && listData.map((data,i)=> {
      return(
        <>
        <p key={i}></p>
        <div>{data}</div>
        <div><button onClick={()=>editActivity(i)}>Edit Activity</button></div>
        <div><button onClick={()=>removeActivity(i)}>Remove(-)</button></div>
        
        </>
      )
    })}
    {listData.length>=1 && 
    <button onClick={removeAll}>Remove All Activity</button>}
    </>
  )
}

export default TodoList