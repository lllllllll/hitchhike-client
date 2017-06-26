import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
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
  console.log(props);
  const { viewer } = props;
  const trips = props.viewer.trips.edges.map(edge => edge.node);
  return (
    <div>
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
                      </span>,
                    )}
                </div>
                <div className="level-right" />
              </div>
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-primary">Join</a>
                </p>
                <p className="control">
                  <a
                    className="button is-danger is-outlined"
                    onClick={() =>
                      props.deleteButtonClickedCallback(trip.id, viewer.id)}
                  >
                    Delete
                  </a>
                </p>
              </div>
            </div>
          </Item>,
        )}
      </ul>
    </div>
  );
};

Trips.defaultProps = {
  trips: [],
};

export default createFragmentContainer(Trips, {
  viewer: graphql`
  fragment Trips_viewer on User {
    id
    trips(first: 10) @connection(key: "Trips_trips", filters: []) {
      edges {
        node {
          created_at
          id
          from
          to
          travel_time
          hitchhikers {
            id
            name
            picture_url
          }
          created_by {
            id
            name
            picture_url
          }
        }
      }
    }
  }
`,
});
