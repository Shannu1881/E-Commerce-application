import React,{useState} from 'react';
import {Link} from 'react-router-dom';


const HomeHeader = () =>{  

        return(
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning">
                       <i className='fa fa-shopping-bag fa-lg'></i> Keep Shopping
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                <i className='fa fa-home'></i> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/cart">
                                <i className='fa fa-shopping-cart'></i> My Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">
                                <i className='fa fa-lock'></i> Admin Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )

}

export default HomeHeader;