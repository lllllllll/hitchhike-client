import React from 'react';
import { graphql, commitMutation, createFragmentContainer } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import Trips from '../component/Trips';

const add_trip_mutation = graphql`
  mutation Home_Add_Trip_Mutation($input: AddTripInput!) {
    addTrip(input: $input) {
      created_at
      id
      from
      to
      travel_time
      hitchhikers {
        id
        name
        picture_url
      }
      created_by {
        id
        name
        picture_url
      }
    }
  }
`;

const remove_trip_mutation = graphql`
  mutation Home_Remove_Trip_Mutation($input: RemoveTripInput!) {
    removeTrip(input: $input) {
      id
    }
  }
`;

const update_trip_mutation = graphql`
  mutation Home_Update_Trip_Mutation($input: UpdateTripInput!) {
    updateTrip(input: $input) {
      created_at
      id
      from
      to
      travel_time
      hitchhikers {
        id
        name
        picture_url
      }
      created_by {
        id
        name
        picture_url
      }
    }
  }
`;

class Container extends React.Component {
  state = {
    from: '',
    to: '',
    travel_time: ''
  };
  _input_changed_handler = key => e => this.setState({ [key]: e.target.value });
  _add_trip = viewer => e => {
    e.preventDefault();
    commitMutation(this.props.relay.environment, {
      mutation: add_trip_mutation,
      variables: {
        input: {
          created_by: viewer.id,
          from: this.state.from,
          to: this.state.to,
          travel_time: new Date().getTime()
        }
      },
      onCompleted: () => this.setState({ isFinished: true }),
      onError: error => console.error(error)
    });
  };
  _remove_trip = (id, user_id) => {
    commitMutation(this.props.relay.environment, {
      mutation: remove_trip_mutation,
      variables: { input: { id } },
      updater: store => {
        const rootField = store.getRootField('removeTrip');
        const deletedId = rootField.getValue('id');
        const userProxy = store.get(user_id);
        const connection = ConnectionHandler.getConnection(
          userProxy,
          'Home_trips'
        );
        ConnectionHandler.deleteNode(connection, deletedId);
      },
      onError: error => console.error(error) // TODO: handle error
    });
  };
  _update_trip_member = (trip_id, hitchhikers) => {
    commitMutation(this.props.relay.environment, {
      mutation: update_trip_mutation,
      variables: { input: { id: trip_id, hitchhikers } },
      onError: error => console.error(error) // TODO: handle error
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1 className="title">Begin a trip!</h1>
          <form>
            <div className="field">
              <label className="label">From</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Place where your trip start"
                  onChange={this._input_changed_handler('from')}
                  value={this.state.from}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">To</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Your destination"
                  onChange={this._input_changed_handler('to')}
                  value={this.state.to}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Date</label>
              <p className="control">
                <input
                  className="input"
                  type="date"
                  placeholder="Your destination"
                  onChange={this._input_changed_handler('date')}
                  value={this.state.travel_time}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Time</label>
              <p className="control">
                <input
                  className="input"
                  type="time"
                  placeholder="Your destination"
                  onChange={this._input_changed_handler('time')}
                  value={this.state.travel_time}
                />
              </p>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <button
                  onClick={this._add_trip(this.props.viewer)}
                  className="button is-primary"
                >
                  Submit
                </button>
              </p>
              <p className="control">
                <button className="button is-link">
                  Cancel
                </button>
              </p>
            </div>
          </form>
        </div>
        <Trips
          viewer={this.props.viewer}
          delete_button_clicked_callback={this._remove_trip}
          join_button_clicked_callback={this._update_trip_member}
          cancel_join_button_clicked_callback={this._update_trip_member}
        />
      </div>
    );
  }
}

export default createFragmentContainer(Container, {
  viewer: graphql`
  fragment Home_viewer on User {
    id
    trips(first: 10) @connection(key: "Home_trips", filters: []) {
      edges {
        node {
          created_at
          id
          from
          to
          travel_time
          hitchhikers {
            id
            name
            picture_url
          }
          created_by {
            id
            name
            picture_url
          }
        }
      }
    }
  }
`
});
