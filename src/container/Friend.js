import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../environment';
import Friend from '../component/Friend';

const query = graphql`
  query FriendQuery($access_token: String){
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
        id
        picture_url
      }
      notFriends {
        id
        picture_url
      }
    }
  }
`;

class Container extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{
          access_token: this.props.cookieManager.getToken()
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log(props);
            return <Friend />;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default Container;
