import React, { useState } from 'react'

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
                        <li><a href="localhost:3000">Home</a></li>
                        <li><a href="localhost:3000">About</a></li>
                        <li><a href="localhost:3000">Contact</a></li>
                    </ul>
            </div>
        </div>
    )
}