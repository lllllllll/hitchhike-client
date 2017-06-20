import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const FacebookButton = styled.button`
  background-color: #4267b2;
  border: 1px solid;
  border-color: #4267b2;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 1em 2em;
  text-align: center;
  width: 200px;

  :disabled {
    background-color: #829fd9;
    border-color: #829fd9;
  }
`;

const SignIn = props => {
  let signInButtonText = 'Sign in with Facebook';
  if (props.isAuthenticating) {
    signInButtonText = 'Logging in...';
  }
  return (
    <Container className="signin-component">
      <FacebookButton
        onClick={() => props.signInButtonClickedCallback()}
        disabled={props.isAuthenticating}
      >
        {signInButtonText}
      </FacebookButton>
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
