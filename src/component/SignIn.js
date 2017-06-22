import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const SignIn = props => {
  return (
    <Container className="signin-component">
      <button
        className={`button is-info${props.isAuthenticating
          ? ' is-loading'
          : ''}`}
        onClick={() => props.signInButtonClickedCallback()}
        disabled={props.isAuthenticating}
      >
        {'Sign in with Facebook'}
      </button>
    </Container>
  );
};

SignIn.propTypes = {
  isAuthenticating: PropTypes.bool,
  signInButtonClickedCallback: PropTypes.func
};

SignIn.defaultProps = {
  isAuthenticating: false,
  signInButtonClickedCallback() {}
};

export default SignIn;
