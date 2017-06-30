import React from 'react';
import docCookies from 'doc-cookies';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import CookieManager from './helper/CookieManager';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// init fb sdk
window.fbAsyncInit = function() {
  window.FB.init({
    appId: process.env.REACT_APP_FB_APP_ID,
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
  window.FB.AppEvents.logPageView();
};

const cookieManager = new CookieManager(docCookies);

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route
          path="/signin"
          component={props =>
            <SignIn {...props} cookieManager={cookieManager} />}
        />
        <Route
          component={props => <App {...props} cookieManager={cookieManager} />}
        />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
