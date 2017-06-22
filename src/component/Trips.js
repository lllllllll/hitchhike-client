import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const Name = styled.strong`
  margin: 0 0 0 1em;
`;

const JoinButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TripItem = styled.div`
  border: 1px solid grey;
  margin: 0 0 1em 0;
`;

const Destination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const PlaceName = styled.div`
  width: 120px;
  height: 4em;
  text-align: center;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HitchhikerContainer = styled.div`

`;

const Trips = props => {
  console.log(props);
  const { trips } = props;
  return (
    <div>
      <h1 className="title is-1">Trips</h1>
      <ul>
        {trips.map(trip =>
          <li key={trip.id}>
            <TripItem>
              <Header>
                <Avatar>
                  <ProfilePicture
                    src={trip.created_by.picture_url}
                    alt={trip.created_by.name}
                  />
                  <Name>{trip.created_by.name}</Name>
                </Avatar>
                <JoinButton>
                  <i className="material-icons">add_circle_outline</i>
                </JoinButton>
              </Header>
              <Destination>
                <PlaceName>
                  <strong>{trip.from}</strong>
                  <small>From</small>
                </PlaceName>
                <strong>></strong>
                <PlaceName>
                  <strong>{trip.to}</strong>
                  <small>To</small>
                </PlaceName>
              </Destination>
              <HitchhikerContainer>
                {trip.hitchhikers.map(hitchhiker =>
                  <li key={hitchhiker.id}>
                    <strong>ท{hitchhiker.name}</strong>
                  </li>
                )}
              </HitchhikerContainer>
            </TripItem>
          </li>
        )}
      </ul>
    </div>
  );
};

Trips.defaultProps = {
  trips: []
};

export default Trips;
