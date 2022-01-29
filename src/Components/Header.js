import React from 'react'

export default function Header(){
    return (
        <div className='navbar'>
            <div className='brand-title'>Ulta</div>
            <a className='toggle-button' href="localhost:3000">
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links'></div>
                <ul className='ul-links'>
                    <li><a href="localhost:3000">Home</a></li>
                    <li><a href="localhost:3000">About</a></li>
                    <li><a href="localhost:3000">Contact</a></li>
                </ul>
        </div>
    )
}