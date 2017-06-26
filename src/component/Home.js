import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Trips from './Trips';
const Home = props => {
  return (
    <div>
      <Trips
        viewer={props.viewer}
        deleteButtonClickedCallback={props.removeTripHandler}
      />
    </div>
  );
};

export default Home;
