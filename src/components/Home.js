import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "./Home.css";
import { Container, Col, Row } from 'reactstrap';
import { fetchActions } from '../actions/homeActions';

class Home extends Component {

  componentWillMount() {
    this.props.fetchActions();
  }
  render() {
    let meetups = this.props.meetups.map(meetup => {
      return (
        <Container>
          <div className="card">
            <h2><b>Title:</b> {meetup.title}</h2>
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" width="100%" height="350" />
            <p><b>Location:</b> {meetup.location}</p>
            <p><b>Date Happening:</b> {meetup.happeningOn}</p>
            <p><b>Tags:</b> {meetup.tags}</p>
            <p><b>Time Added</b> {meetup.time_added}</p>
          </div>
        </Container>

      );
    });
    return (
      <Col sm="12"><Row>{meetups}</Row></Col>
    );
  }
}

Home.propTypes = {
  fetchActions: PropTypes.func.isRequired,
  meetups: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  meetups: state.meetups.data,
});
export default connect(mapStateToProps, { fetchActions })(Home);

