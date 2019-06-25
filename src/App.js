import React from 'react';
import { Provider } from 'react-redux';
import Home from "./components/Home";
import SignUp from './components/signup';
import SignIn from './components/signin';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Layout from './components/layout';
import Navbar from './components/Navbar';
import store from './store';

function App() {

    return (
        <Provider store={store}>
            <Layout>
                <BrowserRouter>
                    <div className="navbar">
                        <div className="nav-header">
                            <Link to="/">
                                <h3>&#9776;Questioner</h3><hr />
                            </Link>
                        </div>
                        <Navbar />
                    </div>
                    <Route path="/" exact component={Home} />
                    <Route path="/index" exact component={Home} />
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/signin" exact component={SignIn} />
                </BrowserRouter>
            </Layout>
        </Provider>
    );
}
export default App; 