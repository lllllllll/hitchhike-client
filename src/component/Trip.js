import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div.attrs({
  tabIndex: 0
})`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 100%;
`;

const Info = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  margin: 0 0 0 1em;
`;

const InfoText = styled.div`
  margin: 0 0 0 1em;
`;

const JoinButton = styled.button`
  width: 5em;
  height: 5em;
  background-color: transparent;
  margin: 0 0 0 1em;
  border: none;
`;

class Trip extends Component {
  render() {
    const { destination_name, travel_time, created_by } = this.props.trip;
    return (
      <div className="trip-component media">
        <figure className="media-left">
          <p class="image is-64x64">
            <img src={created_by.picture_url} alt={`by-${created_by.name}`} />
          </p>
        </figure>
        <div className="media-content">
          <Info>
            <i className="material-icons">directions_car</i>
            <strong>{destination_name}</strong>
          </Info>
          <Info>
            <i className="material-icons">access_time</i>
            <small>
              {moment(travel_time).format('DD MMM YYYY-HH:mm')}
            </small>
          </Info>
        </div>
        <div className="media-right">
          <JoinButton>
            <i className="material-icons">plus_one</i>
          </JoinButton>
        </div>
      </div>
    );
  }
}

export default Trip;
