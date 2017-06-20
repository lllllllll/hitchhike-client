import React, { Component } from 'react';
import { commitMutation, graphql, QueryRenderer } from 'react-relay';
import environment from '../environment';

const query = graphql`
  query AddTripQuery($access_token: String){
    user(access_token: $access_token) {
      id
      name
      is_admin
    }
  }
`;

const mutation = graphql`
  mutation AddTripMutation($trip: TripInputType!) {
    addTrip(trip: $trip) {
      id
    }
  }
`;

class AddTrip extends Component {
  state = {
    from: '',
    to: '',
    date: '',
    time: ''
  };
  inputChangeHandler(key) {
    return e => this.setState({ [key]: e.target.value });
  }
  addTrip(user_id) {
    return e => {
      e.preventDefault();
      commitMutation(environment, {
        mutation,
        variables: {
          trip: {
            created_by: user_id,
            from: this.state.from,
            to: this.state.to,
            travel_time: new Date().getTime()
          }
        },
        onCompleted: response => console.log(response),
        onError: error => console.error(error)
      });
    };
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{
          access_token: this.props.cookieManager.getToken()
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log(props);
            return (
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
                        onChange={this.inputChangeHandler('from')}
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
                        onChange={this.inputChangeHandler('to')}
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
                        onChange={this.inputChangeHandler('date')}
                        value={this.state.date}
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
                        onChange={this.inputChangeHandler('time')}
                        value={this.state.time}
                      />
                    </p>
                  </div>
                  <div className="field is-grouped">
                    <p className="control">
                      <button
                        onClick={this.addTrip(props.user.id)}
                        className="button is-primary"
                      >
                        Submit
                      </button>
                    </p>
                    <p className="control">
                      <button className="button is-link">Cancel</button>
                    </p>
                  </div>
                </form>
              </div>
            );
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default AddTrip;
