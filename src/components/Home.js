import React, { Component } from 'react';
import axios from 'axios';
import "./Home.css";

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
            <div>
                <h2>{meetup.title}</h2>
                <p>{meetup.meetup_id}</p>
                <p>{meetup.location}</p>
                <p>{meetup.happeningOn}</p>
                <p>{meetup.tags}</p>
                <p>{meetup.time_added}</p>
            </div>

          );
        });
        return(
            <div className="Home container">{meetups}</div>
        );
    }
}
 
export default Home;

