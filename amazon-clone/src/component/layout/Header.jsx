import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <nav>
            <ul>
                <li><NavLink activeClassName="active" to="/home" >HOME</NavLink></li>
                <li><NavLink activeClassName="active" to="/product">PRODUCT</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header