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
        <List>
          {this.props.trips.map(trip =>
            <li key={trip.id}>
              <Trip trip={trip} />
            </li>
          )}
        </List>
      </div>
    );
  }
}

export default Trips;
