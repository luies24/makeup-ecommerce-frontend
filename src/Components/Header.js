import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){

    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()

        setShow(!show)
        console.log(show)
        //return list items here?
    } 

    return (
        <div className='navbar'>
            <div className='brand-title'>Ulta</div>
            <a 
                className='toggle-button' 
                href="http://localhost:3000"
                onClick={handleClick}> 
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
            </a>
            <div className='navbar-links'>
                    <ul className='ul-links'>
                        <li><Link to="/Products">Products</Link></li>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/SignUp">Sign In</Link></li>
                    </ul>
            </div>
        </div>
    )
}