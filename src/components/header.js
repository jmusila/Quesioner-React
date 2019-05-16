import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom'
import "./Home.css";

const Header = () => {
    return ( 
        <Router>
            <div className="navbar">
                <div className="nav-header">
                    <Link to="/">
                        <h3>&#9776;Questioner</h3><hr/>
                    </Link>
                </div>
            </div>
            {/* <div className="nav-links">
                <Link to="/index">Home</Link>
                <Link to="/signin">Login</Link>
                <Link to="/signup">Register</Link>
          </div> */}
        </Router>
     );
}
 
export default Header;