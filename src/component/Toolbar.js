import React from 'react';
import { Link } from 'react-router-dom';

const Component = props =>
  <nav className="nav has-shadow">
    <div className="container">
      <div className="nav-left">
        <a className="nav-item">
          <h1 className="title">HITCHHIKER</h1>
        </a>
      </div>
      <div className="nav-right nav-menu">
        <div className="nav-item">
          <div className="field is-grouped">
            <p className="control">
              <Link className="button is-primary" to="/addtrip">
                <span>Add new trip</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>;

export default Component;
