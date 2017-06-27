import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { ConnectionHandler } from 'relay-runtime';
import Home from '../component/Home';
import Trips from '../component/Trips';
import environment from '../environment';
import AddTripContainer from './AddTrip';

// const query = graphql`
//   query HomeQuery($access_token: String) {
//     user(access_token: $access_token) {
//       id
//       name
//       is_admin
//       picture_url
//       ...Home_trips
//     }
//   }
// `;

const mutation = graphql`
  mutation HomeMutation($input: RemoveTripInput!) {
    removeTrip(input: $input) {
      id
    }
  }
`;

class Container extends React.Component {
  removeTrip = (id, user_id) => {
    // commitMutation(environment, {
    //   mutation,
    //   variables: { input: { id } },
    //   updater: store => {
    //     const payload = store.getRootField('removeTrip');
    //     const deletedId = payload.getValue('id');
    //     const userProxy = store.get(user_id);
    //     const connection = ConnectionHandler.getConnection(
    //       userProxy,
    //       'Trips_trips'
    //     );
    //     ConnectionHandler.deleteNode(connection, deletedId);
    //   },
    //   onCompleted: () => console.log('removeTrip completed'),
    //   onError: error => console.error(error)
    // });
  };
  render() {
    console.log('home props', this.props);
    return (
      <div>
        <Trips viewer={this.props.viewer} />
      </div>
    );
  }
}

export default Container;
