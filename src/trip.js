import React, { Component } from 'react';

class Trip extends Component {
  render() {
    const { destination_name, id, travel_time } = this.props.trip;
    return (
      <div>
        <div>{id}</div>
        <div>{destination_name}</div>
        <div>{travel_time}</div>
      </div>
    );
  }
}

export default Trip;
