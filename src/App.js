import React, { Component } from 'react';
import docCookies from 'doc-cookies';
import { Redirect } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import HomeContainer from './container/Home';
import CookieManager from './helper/CookieManager';

const cookieManager = new CookieManager(docCookies);

function fetchQuery(operation, variables) {
  return fetch(`${process.env.REACT_APP_HITCHHIKE_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

class App extends Component {
  render() {
    const accessToken = this.props.cookieManager.getToken();
    if (!accessToken) {
      return <Redirect to="/signin" />;
    }
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={graphql`
          query AppQuery($access_token: String!) {
            viewer(access_token: $access_token) {
              id
              name
              picture_url
              ...Home_viewer
            }
          }
        `}
        variables={{ access_token: accessToken }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          }
          if (props) {
            return <HomeContainer {...props} cookieManager={cookieManager} />;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default App;
