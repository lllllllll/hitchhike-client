import React, { Component } from 'react';
import Trip from './trip';

class Trips extends Component {
  render() {
    return (
      <div>
        {this.props.trips.map(trip => <Trip key={trip.id} trip={trip} />)}
      </div>
    );
  }
}

export default Trips;
