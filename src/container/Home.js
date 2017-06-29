import React from 'react';
import { graphql, commitMutation, createFragmentContainer } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import Trips from '../component/Trips';

const removeTripMutation = graphql`
  mutation HomeRemoveTripMutation($input: RemoveTripInput!) {
    removeTrip(input: $input) {
      id
    }
  }
`;

const updateTripMutation = graphql`
  mutation HomeJoinTripMutation($input: UpdateTripInput!) {
    updateTrip(input: $input) {
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
`;

class Container extends React.Component {
  _removeTrip = (id, user_id) => {
    commitMutation(this.props.relay.environment, {
      mutation: removeTripMutation,
      variables: { input: { id } },
      updater: store => {
        const rootField = store.getRootField('removeTrip');
        const deletedId = rootField.getValue('id');
        const userProxy = store.get(user_id);
        const connection = ConnectionHandler.getConnection(
          userProxy,
          'Home_trips',
        );
        ConnectionHandler.deleteNode(connection, deletedId);
      },
      onError: error => console.error(error), // TODO: handle error
    });
  };
  _updateTripMember = (trip_id, hitchhikers) => {
    commitMutation(this.props.relay.environment, {
      mutation: updateTripMutation,
      variables: { input: { id: trip_id, hitchhikers } },
      onError: error => console.error(error), // TODO: handle error
    });
  };
  render() {
    console.log('home props', this.props);
    return (
      <div>
        <Trips
          viewer={this.props.viewer}
          deleteButtonClickedCallback={this._removeTrip}
          joinButtonClickedCallback={this._updateTripMember}
          cancelJoinButtonClickedCallback={this._updateTripMember}
        />
      </div>
    );
  }
}

export default createFragmentContainer(Container, {
  viewer: graphql`
  fragment Home_viewer on User {
    id
    trips(first: 10) @connection(key: "Home_trips", filters: []) {
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
