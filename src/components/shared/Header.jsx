import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <ul className='nav__links'>
                <li className='items-e'> <Link to='/'>e-commerce</Link> </li>
                <li className='items'> <Link to='/login'>Login</Link> </li>
                <li className='items'> <Link to='/cart'>Cart</Link> </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header