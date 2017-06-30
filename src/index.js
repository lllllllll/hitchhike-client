import React from 'react';
import docCookies from 'doc-cookies';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Route
        path="/signin"
        component={props => <SignIn {...props} cookieManager={cookieManager} />}
      />
      <App cookieManager={cookieManager} />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
