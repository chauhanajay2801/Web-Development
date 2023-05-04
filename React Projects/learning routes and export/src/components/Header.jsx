import React from 'react'
import { Link } from 'react-router-dom'



// to connect the react router dom we will import the Link tag
const Header = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Header