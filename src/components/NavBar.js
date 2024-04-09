
import './navbar.css'
import Logo from '../assets/logos/logo.svg'
import { useState } from 'react'


const Menu = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
    </svg>
}


export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <div className="navbar-container">
                <div className='navbar-col1'>
                    <div className="navbar-logo">
                        <img src={Logo}></img>
                    </div>
                    <button className='navbar-ham' onClick={() => { setShowMenu(!showMenu) }}>
                        {Menu()}
                    </button>
                </div>
                <div className={`navbar-items-holder ${showMenu ? "menu-show" : "menu-collapse"}`}>
                    <div className='navbar-items-container'>
                        <div className="navbar-item">Talent finder </div>
                        <div className="navbar-item">For Recruiters</div>
                        <div className="navbar-item">For Employers</div>
                        <div className="navbar-item">About Us</div>
                        <div className="navbar-item">Company</div>
                    </div>
                    <div className="navbar-buttons-container">
                        <button className="navbar-button">Login</button>
                        <button className="navbar-button purple-background">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}