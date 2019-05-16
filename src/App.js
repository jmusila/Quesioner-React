import React, { Component } from 'react';
import Home from "./components/Home";
import SignUp from './components/signup';
import SignIn from './components/signin';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Layout from './components/layout';
 
class App extends Component {
    UserLogout() {
        localStorage.removeItem('token');
    }
    render() {
        const token = localStorage.getItem('token');

        return(
            <Layout>
                <BrowserRouter>
                <div className="navbar">
                    <div className="nav-header">
                    <Link to="/">
                        <h3>&#9776;Questioner</h3><hr/>
                    </Link>
                    </div>
                        <div className="header-list">
                            {
                                token 
                                ? 
                                <div>
                                    <Link to="/index">Home</Link>
                                    <Link onClick={this.UserLogout} to="/signin">Logout</Link>
                                </div>
                                :
                                <div>
                                    <Link to="/index">Home</Link>
                                    <Link to="/signin">Login</Link>
                                    <Link to="/signup">Register</Link>
                                </div>
                            }
                        </div>
                </div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/index" exact component={Home}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/signin" exact component={SignIn}/>
                </BrowserRouter>
            </Layout>
        );
    }
}
export default App; 