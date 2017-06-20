import React, { Component } from 'react';
import docCookies from 'doc-cookies';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import SignInContainer from './container/SignIn';
import HomeContainer from './container/Home';
import CookieManager from './helper/CookieManager';

const cookieManager = new CookieManager(docCookies);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={props => {
              if (cookieManager.hasToken === false) {
                return (
                  <Redirect
                    to={{
                      pathname: '/signin',
                      state: { from: props.location }
                    }}
                  />
                );
              }
              return <HomeContainer />;
            }}
          />
          <Route
            path="/signin"
            component={props =>
              <SignInContainer cookieManager={cookieManager} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
