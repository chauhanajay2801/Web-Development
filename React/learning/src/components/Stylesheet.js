import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl`} >Sytle sheets</h1>
    </div>
  )
}

export default Stylesheet