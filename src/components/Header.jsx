import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import 'boxicons';


const mainNav = [
    {
        display: "Home",
        path: '/'
    },
    {
        display: "Products",
        path: '/catalog'
    },
    {
        display: "Accessories",
        path: '/assessories'
    },
    {
        display: "Contact",
        path: '/contact'
    }
]

const Header = () => {
    return (
        <div className= "header">
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__left">
                        <div className="header__menu__mobile-toggle">
                            <i className='bx bx-menu-alt-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className="header__menu__left__item">
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;