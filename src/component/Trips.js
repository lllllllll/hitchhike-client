import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  margin: 0 0 16px 0;
`;

const ProfilePicture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

const DirectionalIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Trips = props => {
  const { trips } = props;
  return (
    <div>
      <h1 className="title is-1">Trips</h1>
      <ul>
        {trips.map(trip =>
          <Item key={trip.id}>
            <div className="box">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <ProfilePicture
                      src={trip.created_by.picture_url}
                      alt={trip.created_by.name}
                    />
                    <p className="card-header-title">{trip.created_by.name}</p>
                  </div>
                </div>
                <div className="level-right" />
              </div>
              <div className="columns is-mobile is-gapless">
                <div className="column is-5-mobile">
                  <div className="box">
                    <p><strong>{trip.from}</strong></p>
                    <p><small>From</small></p>
                  </div>
                </div>
                <DirectionalIcon className="column is-2-mobile">
                  >
                </DirectionalIcon>
                <div className="column is-5-mobile">
                  <div className="box">
                    <p><strong>{trip.to}</strong></p>
                    <p><small>To</small></p>
                  </div>
                </div>
              </div>
              <div className="level">
                <div className="level-left">
                  {trip.hitchhikers.length === 0 && <strong>No member</strong>}
                  {trip.hitchhikers.length > 0 &&
                    trip.hitchhikers.map(hitchhiker =>
                      <span key={hitchhiker.id}>
                        <ProfilePicture
                          src={hitchhiker.picture_url}
                          alt={hitchhiker.name}
                        />
                      </span>
                    )}
                </div>
                <div className="level-right" />
              </div>
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-primary">Join</a>
                </p>
                <p className="control">
                  <a className="button is-danger is-outlined">Delete</a>
                </p>
              </div>
            </div>
          </Item>
        )}
      </ul>
    </div>
  );
};

Trips.defaultProps = {
  trips: []
};

export default Trips;
