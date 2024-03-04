import React from 'react'
import './navbar.css';
import { Link, useLocation, useParams } from 'react-router-dom';

const Navbar = () => {

 const location =useLocation();

    return (
        <>
            <nav>
                <div className="contenthead">
                    <div className="navflexbox">
                        <Link to={'/'}>
                            <div className="iconbox">
                                <img src="/logoQuiz.png" alt="logo" />
                            </div>
                        </Link>

                        <div className="navright">
                            <Link to={'/'}>
                                <p className={`navhome nav-item ${location.pathname === '/' && 'active'} `}>home</p>
                            </Link>
                            <Link to={'/about'}>
                                <p className={`navhome ${location.pathname === '/about' && 'active'} `}>about</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar
