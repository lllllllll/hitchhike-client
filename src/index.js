import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

window.fbAsyncInit = function() {
  window.FB.init({
    appId: process.env.REACT_APP_FB_APP_ID,
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
  window.FB.AppEvents.logPageView();
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
