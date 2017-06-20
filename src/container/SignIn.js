import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import SignIn from '../component/SignIn';

class Container extends Component {
  state = {
    authenticating: false,
    hasToken: this.props.cookieManager.hasToken()
  };
  authenticate = () => {
    this.setState({ authenticating: true });
    return window.FB.login(
      res => {
        if (res.authResponse) {
          const accessToken = res.authResponse.accessToken;
          return fetch('http://localhost:3006/signin', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              access_token: accessToken
            })
          })
            .then(res => res.json())
            .then(res => {
              this.props.cookieManager.setToken(res.access_token);
              this.setState({ hasToken: this.props.cookieManager.hasToken() });
            })
            .catch(error => console.log(error));
        }
        this.setState({
          alertText: 'Facebook authentication failed',
          authenticating: false
        });
        return Promise.resolve();
      },
      { scope: 'public_profile' }
    );
  };
  render() {
    if (this.state.hasToken) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      );
    }
    return <SignIn signInButtonClickedCallback={this.authenticate} />;
  }
}

Container.propTypes = {
  cookieManager: PropTypes.shape({
    setToken: PropTypes.func
  })
};

Container.defaultProps = {
  cookieManager: {
    setToken() {}
  }
};

export default Container;
