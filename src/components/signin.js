import React, { Component } from 'react';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginUser: {
                email: '',
                password: ''
            },
            isLoggedIn: false
         }
    }

    signinUser(){
        axios.post('https://my-postgres-questioner-v2-api.herokuapp.com/api/v2/auth/login', this.state.loginUser)
            .then((response) => {
                if (response.status === 200) {
                    const token = response.data['access_token'];
                    localStorage.setItem('token', token);
                    this.setState({ isLoggedIn: true }, () => {
                        const { isLoggedIn } = this.state;
                        const { history } = this.props;
                        if(isLoggedIn) {
                            history.push('/');
                        }
                    })
                }
            });
    }

    render() {
        const token = localStorage.getItem('token');
        if (token) {
            return <Redirect to="/" />
        }

        return ( 
            <div className="SingIn container">
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" value={this.state.loginUser.email} onChange={(e) => {
                        let { loginUser } = this.state;
                        loginUser.email = e.target.value;
                        this.setState({ loginUser })
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" value={this.state.loginUser.password} onChange={(e) => {
                        let { loginUser } = this.state;
                        loginUser.password = e.target.value;
                        console.log(loginUser.password)
                        this.setState({ loginUser })
                        }}/> 
                    </FormGroup>
                </Form>
                <Button id="submit" color="primary" onClick={this.signinUser.bind(this)}>SignIn</Button>{' '}
            </div>
         );
    }
}
 
export default SignIn;