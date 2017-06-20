const cookie = {
  name: {
    token: `hhat_${process.env.REACT_APP_FB_APP_ID}`
  }
};

export default class CookieManager {
  constructor(docCookies) {
    this.docCookies = docCookies;
  }
  setToken(token) {
    this.docCookies.setItem(cookie.name.token, token, 60 * 60 * 24 * 30);
  }
  hasToken() {
    return this.docCookies.hasItem(cookie.name.token);
  }
  removeToken() {
    this.docCookies.removeItem(cookie.name.token);
  }
}
