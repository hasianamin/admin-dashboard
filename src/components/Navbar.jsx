import React from 'react';
import * as Icon from 'react-bootstrap-icons'
import Logo from './../assets/logo.png'

const Navbar=()=>{
    const showMenu = () =>{
        const sidebar = document.getElementById('nav-menu')
        sidebar.classList.toggle('show')
    }

    return(
        <div className='navbar'>
            <div className="navbar-content">
                <div className="nav-btn" id='nav-toggle' onClick={showMenu}>
                    <Icon.Justify size={24}/>
                </div>
                <div className="nav-logo">
                    <img src={Logo} alt="logo"/>
                </div>
            </div>
            <div className="navbar-content">
                <div className="nav-profile">
                    <p>Hallo, <span>Gadjian User</span></p>
                    <div className="img-profile">
                        Photo
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar