import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar'>
                <div className='logo'>
                    <Link to='/' className='indv-links'>MovieApp</Link>
                </div>
                <div className='links'>
                    <li>
                        <Link to='/' className='indv-links'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favourites' className='indv-links'>Favourites</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
