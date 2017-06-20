import React, { Component } from 'react';
import styled from 'styled-components';
import Trip from './Trip';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

class Trips extends Component {
  render() {
    return (
      <div>
        <h1 className="title is-1">Trips</h1>
        <h2 className="title is-2">My trips</h2>
        <List>
          {this.props.myTrips.map(trip =>
            <li key={trip.id} className="box">
              <Trip trip={trip} />
            </li>
          )}
        </List>
        <h2 className="title is-2">Friend trips</h2>
        <List>
          {this.props.friendTrips.map(trip =>
            <li key={trip.id} className="box">
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
