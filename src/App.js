import React, { Component } from 'react';
import Home from "./components/Home";
import SignUp from './components/signup';
import SignIn from './components/signin';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/layout';
 
class App extends Component {
     render() {
        return(
            <Layout>
                <BrowserRouter className="App">
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/index' exact component={Home}/>
                    <Route path='/signup' exact component={SignUp}/>
                    <Route path='/signin' exact component={SignIn}/>
                </BrowserRouter>
            </Layout>
        );
     }
}
export default App; 