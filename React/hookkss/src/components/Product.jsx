import React from 'react';

const Coin = ({ name, symbol }) => {
  return (
    <>
    <div>{symbol}</div>
    <div>{name}</div>
    </>
  )
}

export default Coin;