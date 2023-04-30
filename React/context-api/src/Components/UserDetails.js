import React, { useContext } from 'react';
import { myContext } from "../App";

const UserDetails = () => {
 const data = useContext(myContext);
    return (
    <div>
    My name is {data.name} and my color is {data.color}
    </div>
  )
}

export default UserDetails