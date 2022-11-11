import React,{useState} from 'react';
import {Link} from 'react-router-dom';


const AdminHeader = () =>{  

        return(
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning">
                       <i className='fa fa-shopping-bag fa-lg'></i> Keen Shopping
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/dashboard">
                               <i className='fa fa-home'></i> Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/manageorder">
                               <i className='fa fa-phone'></i> Manage Orders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/manageproduct">
                               <i className='fa fa-suitcase'></i> Manage Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" onClick={logout}>
                               <i className='fa fa-power-off'></i> Admin Logout
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
}
export default AdminHeader;

const logout = () =>{
    localStorage.clear();// it clear history of browser
    window.location.href="http://localhost:3000/#/login"; // redirect to login page
    window.location.reload();// after goining to login page it will reload again
}