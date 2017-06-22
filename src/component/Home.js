import React from 'react';
import Trips from './Trips';
const Home = props =>
  <div>
    <Trips trips={props.trips} />
  </div>;

export default Home;
