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
          this.props.cookieManager.setToken(accessToken);
          this.setState({ hasToken: this.props.cookieManager.hasToken() });
          // return this.props.service.data
          //   .logIn(accessToken)
          //   .then(({ access_token }) => {
          //     this.props.cookieManager.setToken(access_token);
          //     this.setState({ authenticating: false });
          //   })
          //   .catch(() => {
          //     // TODO: create error logging
          //     this.setState({
          //       alertText: 'Server error',
          //       authenticating: false
          //     });
          //   });
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
    console.log(this.state);
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
