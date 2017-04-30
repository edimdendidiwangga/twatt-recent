var OAuth = require('oauth');
require('dotenv').config()

module.exports = {
  getOauthTwitter : function(next){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.Consumer_Key,
      process.env.Consumer_Secret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    next(oauth)
  }
}
