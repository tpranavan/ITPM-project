import React from 'react'

// import Button from '../../../../dashboard/node_modules/@restart/ui/esm/Button';
import Card from 'react-bootstrap/Card';


export default function header() {
    return (
        <div style={{backgroundColor: 'grey'}}>
            <header className="header-style-two header-style-three" >
                <div id="sticky-header" className="main-header menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler">
                                    <i className="fas fa-bars" />
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav show">
                                        {/* <div className="logo">
                                            <a href="#">
                                                <img src="images/LOGO final.png" alt="Logo" width="100px" />
                                            </a>
                                        </div> */}
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation" >
                                                <li className="dropdown">
                                                    <a href="/" style={{fontSize:"25px"}}>Home</a>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#" style={{fontSize:"25px"}}>Our Services</a>
                                                    <ul className="submenu" >
                                                        <li >
                                                            <a href="/doctors" >Doctors</a>
                                                        </li>
                                                        <li>
                                                            <a href="/Hospital">Hospital</a>
                                                        </li>
                                                        
                                                        <li>
                                                            <a href="/cleaning">Cleaning Service</a>
                                                        </li>
                                                       
                                                        <li>
                                                            <a href="/Ambulance_Details">Ambulance Details</a>
                                                        </li>
                                                       
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/about" style={{fontSize:"25px"}}>About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/contact" style={{fontSize:"25px"}}>contacts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
