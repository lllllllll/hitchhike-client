import React, { Component } from 'react';
import Trips from '../component/Trips';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../environment';

const homeQuery = graphql`
  query HomeQuery($access_token: String){
    user(access_token: $access_token) {
      id
      name
      is_admin
      trips {
        id
        travel_time
        from
        to
        created_by {
          id
          name
          picture_url
        }
      }
      friends {
        trips {
          id
          travel_time
          from
          to
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

class Home extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={homeQuery}
        variables={{
          // access_token: this.props.cookieManager.getToken()
          access_token: 'access_token'
        }}
        render={({ error, props }) => {
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

export default Home;
