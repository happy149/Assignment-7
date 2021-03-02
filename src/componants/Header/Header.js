import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (<div className="header">
        <div>
            <img src={logo} alt=""/>
        </div>
            <div>
                <h1>Happy Club</h1>

            </div>
            </div>

    );
};

export default Header;