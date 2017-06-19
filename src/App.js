import React, { Component } from 'react';
import Trips from './trips';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './environment';

const AppQuery = graphql`
  query AppQuery($access_token: String){
    user(access_token: $access_token) {
      id
      name
      is_admin
      trips {
        id
        travel_time
        destination_name
      }
      friends {
        trips {
          id
          travel_time
          destination_name
          created_by {
            id
            name
            picture_url
          }
          hitchhikers {
            id
            name
            picture_url
          }
        }
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        variables={{
          access_token: 'access_token'
        }}
        render={({ error, props }) => {
          console.log(props);
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <Trips
                myTrips={props.user.trips}
                friendTrips={props.user.friends
                  .map(friend => friend.trips)
                  .reduce((a, b) => {
                    return a.concat(b);
                  }, [])}
              />
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default App;
