import React from 'react';
import { graphql, commitMutation, createFragmentContainer } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import Trips from '../component/Trips';

const remove_trip_mutation = graphql`
  mutation Home_Remove_Trip_Mutation($input: RemoveTripInput!) {
    removeTrip(input: $input) {
      id
    }
  }
`;

const update_trip_mutation = graphql`
  mutation Home_Update_Trip_Mutation($input: UpdateTripInput!) {
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
  _remove_trip = (id, user_id) => {
    commitMutation(this.props.relay.environment, {
      mutation: remove_trip_mutation,
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
  _update_trip_member = (trip_id, hitchhikers) => {
    commitMutation(this.props.relay.environment, {
      mutation: update_trip_mutation,
      variables: { input: { id: trip_id, hitchhikers } },
      onError: error => console.error(error), // TODO: handle error
    });
  };
  render() {
    return (
      <div>
        <Trips
          viewer={this.props.viewer}
          delete_button_clicked_callback={this._remove_trip}
          join_button_clicked_callback={this._update_trip_member}
          cancel_join_button_clicked_callback={this._update_trip_member}
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
