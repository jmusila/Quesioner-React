import React, { Component } from 'react';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import axios from 'axios';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loginUser:{
                email: '',
                password: ''
            }
         }
    }

    signinUser(){
        axios.post('https://my-postgres-questioner-v2-api.herokuapp.com/api/v2/auth/login', this.state.loginUser).then((response) =>{
            localStorage.setItem('token', response.data['access_token']);
            let { user } = this.state
            
            user.push(response.data)
            this.setState({ user })
        });
        }
    render() { 
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
                        this.setState({ loginUser })
                        }}/> 
                    </FormGroup>
                </Form>
                    <Button color="primary" onClick={this.signinUser.bind(this)}>SignUp</Button>{' '}
            </div>
         );
    }
}
 
export default SignIn;