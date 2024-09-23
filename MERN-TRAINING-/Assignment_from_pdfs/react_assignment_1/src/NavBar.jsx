import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{display: "flex", backgroundColor: "Black", color: "white", justifyContent: "space-around"}}>
        <Link style={{color: "white", fontSize: "24px"}} to="/">HOME</Link>
        <Link style={{color: "white", fontSize: "24px"}} to="/products">PRODUCTS</Link>
    </div>
  )
}

export default NavBar