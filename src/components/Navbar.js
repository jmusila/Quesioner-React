import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {

    UserLogout() {
        localStorage.removeItem('token');
    }
    render() {
        const token = localStorage.getItem('token');
        return (
            <div className="header-list">
                {
                    token
                        ?
                        <div>
                            <Link to="/index">Home</Link>

                            <Link onClick={this.UserLogout} >Logout</Link>
                        </div>
                        :
                        <div>
                            <Link to="/index">Home</Link>
                            <Link to="/signin">Login</Link>
                            <Link to="/signup">Register</Link>
                        </div>
                }
            </div>

        );
    }
}

export default withRouter(Navbar);