export default {
  init: () => {
    return new Promise((resolve, reject) => {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: process.env.REACT_APP_FB_APP_ID,
          cookie: true,
          xfbml: true,
          version: 'v2.8'
        });
        resolve();
      };
    });
  }
};
