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
`;

const SignIn = props =>
  <Container className="signin-component">
    <FacebookButton onClick={() => props.signInButtonClickedCallback()}>
      Sign in with Facebook
    </FacebookButton>
  </Container>;

SignIn.propTypes = {
  signInButtonClickedCallback: PropTypes.func
};

SignIn.defaultProps = {
  signInButtonClickedCallback() {}
};

export default SignIn;
