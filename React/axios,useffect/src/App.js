import React, { useEffect, useState } from 'react'
import Bard from "./Bard"
import axios from 'axios'

function App() {

    const [details,setDetails] = useState({})

    const fetchDetails = async()=> {
       const {data} = await axios.get('https://randomuser.me/api')
       console.log("RESPONSE",data);

       const details = data.results[0]
       setDetails(details)
    }

    let list = ["Ajay","Bhoomika","Chauhan","Dheeraj"]

    useEffect(() => {
      fetchDetails()
    }, [])
    

    return (
        <>
      <div>App</div>
      <Bard myname = "Ajay Chauhan" list = {list} details={details}/>
      <button onClick={fetchDetails}>getDetails</button>
        </>
      )
  }

  export default App;