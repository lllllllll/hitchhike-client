import React from 'react';
import Home from '../component/Home';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../environment';

const query = graphql`
  query HomeQuery($access_token: String){
    user(access_token: $access_token) {
      id
      name
      is_admin
      picture_url
    }
    trips {
      ...Home_trips
    }
  }
`;

const Container = ({ cookieManager }) => {
  const variables = {
    access_token: cookieManager.getToken()
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
          return <Home trips={props.trips} />;
        }
        return <div>Loading...</div>;
      }}
    />
  );
};

export default Container;
