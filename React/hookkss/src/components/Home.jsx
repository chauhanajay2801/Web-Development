import React, { useEffect} from "react";
import Coin from "./Product";
import axios from "axios";

const Home = () => {
  const arr = [1, 2, 3, 4, 5];



  useEffect(()=>{

    const fetchAllCoins = async () => {
      const { data } = await axios.get('https://api.coingecko/api/v3/coins/markets?vs_currency=inr&per_page=20');

    console.log(data)
    };

    fetchAllCoins();
  },[])

  return (
    <div>
      {arr.map((i) => (
        <Coin name={"Bitcoin"} symbol={"Btc"} key={i} />
      ))}
    </div>
  );
};

export default Home;
