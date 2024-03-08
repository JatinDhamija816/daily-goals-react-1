import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }} to='/add'>Add</Link></li>
                <li><Link style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem' }} to='/'>All Todo</Link></li>
            </ul>
        </nav >
    )
}

export default Navbar
