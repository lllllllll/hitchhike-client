import React from 'react';
import Home from '../component/Home';
import { QueryRenderer, graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../environment';

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
    commitMutation(environment, {
      mutation,
      variables: { input: { id } },
      updater: store => {
        const payload = store.getRootField('removeTrip');
        const deletedId = payload.getValue('id');
        const userProxy = store.get(user_id);
        const connection = ConnectionHandler.getConnection(
          userProxy,
          'Trips_trips',
        );
        ConnectionHandler.deleteNode(connection, deletedId);
      },
      onCompleted: () => console.log('removeTrip completed'),
      onError: error => console.error(error),
    });
  };
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query HomeQuery($access_token: String!) {
            viewer(access_token: $access_token) {
              id
              name
              picture_url
              ...Trips_viewer
            }
          }
        `}
        variables={{
          access_token: this.props.cookieManager.getToken(),
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          }
          if (props) {
            console.log('home', props);
            return (
              <Home viewer={props.viewer} removeTripHandler={this.removeTrip} />
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default Container;
