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
                <ul>
                    <li><a href="localhost:3000">Home</a></li>
                    <li><a href="localhost:3000">About</a></li>
                    <li><a href="localhost:3000">Contact</a></li>
                </ul>
        </div>
    )
}

            // <div className='logoSearch'>
            //     <img 
            //         alt='Ulta Beauty'
            //         className="img" 
            //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ulta_Beauty_logo.svg/1200px-Ulta_Beauty_logo.svg.png" 
            //         />
            //     <form>
            //         <input type="text" name='search'></input>
            //         <input type="submit" name='submit'></input>
            //     </form>
            // </div>
            // <div className='CartSignOut'>
            //     <button className='signOut-btn'>Sign Out</button>
            //     <button className='bag-btn'>Bag</button>
            // </div>