import React, { Component } from 'react';
import { Input, FormGroup, Label, Form, Button } from 'reactstrap';
import axios from 'axios';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newUserData:{
                firstname: '',
                lastname: '',
                email: '',
                phoneNumber: '',
                username: '',
                password: ''
              }
         }
    }
    addUser(){
    axios.post('https://my-postgres-questioner-v2-api.herokuapp.com/api/v2/auth/signup', this.state.newUserData).then((response) =>{
        let { users } = this.state

        users.push(response.data)
        this.setState({ users })
    });
    }
    render() { 
        return ( 
            <div className="SignUp container">
                <Form>
                    <FormGroup>
                        <Label for="firstname">Firstname</Label>
                        <Input id="firstname" value={this.state.newUserData.firstname} onChange={(e) => {
                        let { newUserData } = this.state;
                        newUserData.firstname = e.target.value;
                        this.setState({ newUserData })
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">Lastname</Label>
                        <Input id="lastname" value={this.state.newUserData.lastname} onChange={(e) => {
                        let { newUserData } = this.state;
                        newUserData.lastname = e.target.value;
                        this.setState({ newUserData })
                        }}/> 
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input id="email"  value={this.state.newUserData.email} onChange={(e) => {
                        let { newUserData } = this.state;
                        newUserData.email = e.target.value;
                        this.setState({ newUserData })
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phonenumber">Phonenumber</Label>
                        <Input id="phoneNumber"  value={this.state.newUserData.phoneNumber} onChange={(e) => {
                        let { newUserData } = this.state;
                        newUserData.phoneNumber = e.target.value;
                        this.setState({ newUserData })
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username"  value={this.state.newUserData.username} onChange={(e) => {
                        let { newUserData } = this.state;
                        newUserData.username = e.target.value;
                        this.setState({ newUserData })
                        }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" value={this.state.newUserData.password} onChange={(e) => {
                        let { newUserData } = this.state;
                        newUserData.password = e.target.value;
                        this.setState({ newUserData })
                        }}/>
                    </FormGroup>
                </Form>
                    <Button color="primary" onClick={this.addUser.bind(this)}>SignUp</Button>{' '}
                    <Button color="secondary" >Cancel</Button> 
            </div>
         );
    }
}
 
export default SignUp;