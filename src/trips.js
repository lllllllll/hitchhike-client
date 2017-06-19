import React, { Component } from 'react';
import styled from 'styled-components';
import Trip from './trip';

const List = styled.ul`
  list-style-type: none;
`;

class Trips extends Component {
  render() {
    return (
      <div>
        <h1>Trips</h1>
        <h2>My trips</h2>
        <List>
          {this.props.myTrips.map(trip =>
            <li key={trip.id}>
              <Trip trip={trip} />
            </li>
          )}
        </List>
        <h2>Friend trips</h2>
        <List>
          {this.props.friendTrips.map(trip =>
            <li key={trip.id}>
              <Trip trip={trip} />
            </li>
          )}
        </List>
      </div>
    );
  }
}

Trips.defaultProps = {
  myTrips: [],
  friendTrips: []
};

export default Trips;
