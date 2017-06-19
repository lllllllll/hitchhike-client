import React, { Component } from 'react';
import Trips from './trips';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './environment';

const AppQuery = graphql`
  query AppQuery{
    users {
      id
      name
      is_admin
      trips {
        id
        travel_time
        destination_name
      }
      friends {
        id
        trips {
          id
          travel_time
          destination_name
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
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <Trips trips={props.trips} />;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default App;
