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
  margin: 0 0 0 8px;
`;

const DirectionalIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hitchhikers = styled.div`
  display: flex;
  align-items: center;
`;

const Trips = props => {
  const { viewer } = props;
  const trips = props.viewer.trips.edges.map(edge => edge.node);
  const onClickJoinButton = (viewer_id, trip) => _ => {
    const hitchhikers = [...trip.hitchhikers.map(hitchhiker => hitchhiker.id)];
    hitchhikers.push(viewer_id);
    props.joinButtonClickedCallback(trip.id, hitchhikers);
  };
  const doShowJoinButton = (viewer_id, trip) => {
    const doViewerOwnThisTrip = trip.created_by.id === viewer_id;
    const doViewerJoinedThisTrip = trip.hitchhikers.some(
      hitchhiker => hitchhiker.id === viewer_id
    );
    return !doViewerOwnThisTrip || !doViewerJoinedThisTrip;
  };
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
                    <Hitchhikers>
                      <strong>Members: </strong>
                      {trip.hitchhikers.map(hitchhiker =>
                        <span key={hitchhiker.id}>
                          <ProfilePicture
                            src={hitchhiker.picture_url}
                            alt={hitchhiker.name}
                          />
                        </span>
                      )}
                    </Hitchhikers>}
                </div>
                <div className="level-right" />
              </div>
              <div className="field is-grouped">
                {doShowJoinButton(viewer.id, trip) &&
                  <p className="control">
                    <a
                      className="button is-primary"
                      onClick={onClickJoinButton(viewer.id, trip)}
                    >
                      Join
                    </a>
                  </p>}
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
          </Item>
        )}
      </ul>
    </div>
  );
};

Trips.defaultProps = {
  joinButtonClickedCallback() {}
};

export default Trips;
