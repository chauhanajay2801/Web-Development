import React, { useEffect, useState } from "react";
import Coin from "./Product";

const Home = () => {
  const arr = [1, 2, 3, 4, 5];

const [temp, setTemp] = useState(0);

  useEffect(()=>{
    console.log('Working');
  },[temp])

  return (
    <div>
      <button onClick={() => setTemp(temp+1)}>Press me</button>
      {arr.map((i) => (
        <Coin name={"Bitcoin"} symbol={"Btc"} key={i} />
      ))}
      <h1>{temp}</h1>
    </div>
  );
};

export default Home;
