import React from 'react';
import logo from '../assets/logo-elo7.svg'

const Header = () => {
    return (
        <header className="app-header">
            <img className="app-header__logo" src={logo} alt="logo"></img>
        </header>
    );
}

export default Header;