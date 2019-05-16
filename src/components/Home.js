import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css";
import { Container, Col } from 'reactstrap';

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
                <div>
                    <Col sm="4">
                        <div class="card">
                            <h2><b>Title:</b> {meetup.title}</h2>
                            <img src="{cover} "width="100%" height="200"/>
                            <p><b>Location:</b> {meetup.location}</p>
                            <p><b>Date Happening:</b> {meetup.happeningOn}</p>
                            <p><b>Tags:</b> {meetup.tags}</p>
                            <p><b>Time Added</b> {meetup.time_added}</p>
                        </div>
                    </Col>
                </div>
            </Container>

          );
        });
        return(
            <div className="Home container">{meetups}</div>
        );
    }
}
 
export default Home;

