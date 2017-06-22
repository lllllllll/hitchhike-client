import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Trips from './Trips';
const Home = props =>
  <div>
    <Trips trips={props.trips} />
  </div>;

export default createFragmentContainer(
  Home,
  graphql`
        fragment Home_trips on Trip @relay(plural: true) {
          id
          from
          to
          created_by {
            id
            name
            picture_url
          }
          hitchhikers {
            id
            name
            picture_url
          }
        }
      `
);
