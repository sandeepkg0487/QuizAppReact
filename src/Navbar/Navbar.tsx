import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import useEventData from '../QuizTab/Handlechangefilter';
const Navbar = () => {
    let [changestate, setChangestate] = useState(false)
    function myFunction() {

        setChangestate(!changestate);

    }



    return (
        <>
            <nav>
                <div className="container">
                    <div className="navflexbox">
                        <Link to={'/'}>
                            <div className="iconbox">
                                <img src="/Images/logo.png" alt="" />
                                <h1 className='inlineblcok'>Quick Brain</h1>
                            </div>
                        </Link>
                        {/* <div className="hamberger">
                            <div className={changestate ? 'change' : 'hamburgercontainer'} onClick={myFunction}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </nav>

        </>

    )
}

export default Navbar
