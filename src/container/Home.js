import React from 'react';
import Home from '../component/Home';
import { QueryRenderer, graphql, commitMutation } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../environment';

const query = graphql`
  query HomeQuery($access_token: String){
    user(access_token: $access_token) {
      id
      name
      is_admin
      picture_url
      trips {
        ...Home_trips
      }
    }
  }
`;

const mutation = graphql`
  mutation HomeMutation($input: RemoveTripInputType!) {
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
        debugger;
        const payload = store.getRootField('removeTrip');
        const deletedId = payload.getValue('id');
        const userProxy = store.get(user_id);
        const connection = ConnectionHandler.getConnection(
          userProxy,
          'Home_trips'
        );
        ConnectionHandler.deleteNode(connection, deletedId);
      },
      onCompleted: () => console.log('removeTrip completed'),
      onError: error => console.error(error)
    });
  };
  render() {
    const variables = {
      access_token: this.props.cookieManager.getToken()
    };
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <Home
                user={props.user}
                trips={props.user.trips}
                removeTripHandler={this.removeTrip}
              />
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default Container;
