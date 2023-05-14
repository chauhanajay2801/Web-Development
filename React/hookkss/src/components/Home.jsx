import React from 'react'
import Coin from './Product';


const Home = () => {

const arr = [1,2,3,4,5];

  return (
    <div>
        {
            arr.map(i => (
                <Coin name = {"Bitcoin"}  symbol={"Btc"} key={i}/>
            ))
        }
    </div>
  )
}

export default Home