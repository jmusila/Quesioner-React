import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css";
import { Container, Col, Row } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            meetups: []
         }
    }
    componentDidMount(){
        axios.get('https://my-postgres-questioner-v2-api.herokuapp.com/api/v2/meetups/upcoming').then((response) =>{
          this.setState({
            meetups: response.data.data
          })
        }
        );
      }
      render(){
        let meetups = this.state.meetups.map((meetup) =>{
          return(
            <Container>
                <div className="card">
                    <h2><b>Title:</b> {meetup.title}</h2>
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" width="100%" height="350"/>
                    <p><b>Location:</b> {meetup.location}</p>
                    <p><b>Date Happening:</b> {meetup.happeningOn}</p>
                    <p><b>Tags:</b> {meetup.tags}</p>
                    <p><b>Time Added</b> {meetup.time_added}</p>
                </div>      
            </Container>

          );
        });
        return(
            <Col sm="12"><Row>{meetups}</Row></Col>
        );
    }
}
 
export default Home;

