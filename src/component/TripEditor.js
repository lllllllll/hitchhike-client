import React from 'react';
import { Link } from 'react-router';

class TripEditor extends React.Component {
  state = {
    from: '',
    to: '',
    travel_time: ''
  };
  inputChangeHandler = key => e => this.setState({ [key]: e.target.value });
  render() {
    const { viewer } = this.props;
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
                onClick={this.addTrip(viewer.id)}
                className="button is-primary"
              >
                Submit
              </button>
            </p>
            <p className="control">
              <Link to="/" className="button is-link">
                Cancel
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default TripEditor;
