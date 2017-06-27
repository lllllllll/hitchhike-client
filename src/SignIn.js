import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

class SignIn extends Component {
  state = {
    isAuthenticating: false,
    hasToken: this.props.cookieManager.hasToken()
  };
  _authenticate = () => {
    this.setState({ isAuthenticating: true });
    return window.FB.login(
      res => {
        if (res.authResponse) {
          const access_token = res.authResponse.accessToken;
          return fetch(`${process.env.REACT_APP_HITCHHIKE_API_URL}/signin`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ access_token })
          })
            .then(res => res.json())
            .then(res => {
              this.props.cookieManager.setToken(res.access_token);
              this.setState({ hasToken: this.props.cookieManager.hasToken() });
            })
            .catch(error => console.log(error));
        } else {
          this.setState({
            alertText: 'Facebook authentication failed',
            isAuthenticating: false
          });
          return Promise.resolve();
        }
      },
      { scope: 'public_profile' }
    );
  };
  render() {
    const { isAuthenticating, hasToken } = this.state;
    const { location } = this.props;
    if (hasToken) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location }
          }}
        />
      );
    }
    let signButtonClassName = 'button is-info';
    if (isAuthenticating) {
      signButtonClassName += ' is-loading';
    }
    return (
      <Container className="signin-component">
        <button
          className={signButtonClassName}
          onClick={() => this._authenticate()}
          disabled={isAuthenticating}
        >
          {'Sign in with Facebook'}
        </button>
      </Container>
    );
  }
}

SignIn.propTypes = {
  cookieManager: PropTypes.shape({
    setToken: PropTypes.func
  })
};

SignIn.defaultProps = {
  cookieManager: {
    setToken() {}
  }
};

export default SignIn;
