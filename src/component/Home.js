import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import Trips from './Trips';
const Home = props => {
  const trips = props.trips.edges.map(edge => edge.node);
  return (
    <div>
      <Trips
        trips={trips}
        user={props.user}
        deleteButtonClickedCallback={props.removeTripHandler}
      />
    </div>
  );
};

export default Home;

// export default createFragmentContainer(
//   Home,
//   graphql`
//     fragment Home_trips on User {
//       trips(first: 10) @connection(key: "user_trips", filters: []) {
//         edges {
//           node {
//             id
//             from
//             to
//             travel_time
//             created_by {
//               id
//               name
//               picture_url
//             }
//             hitchhikers {
//               id
//               name
//               picture_url
//             }
//           }
//         }
//       }
//     }
//   `,
// );
