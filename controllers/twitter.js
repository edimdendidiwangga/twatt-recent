let model = require('../models/twitter_data')
const methods = {}

methods.searchTweets = function(req, res) {
  let search = req.params.search;
  model.getOauthTwitter(function(oauth){
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
        process.env.Access_Token, //test user token
        process.env.Access_Token_Secret, //test user secret
        function (e, data){
          if (e) console.error(e);
          res.send(data)
        })
    })
}

methods.timelineTweets = function(req, res) {
  model.getOauthTwitter(function(oauth){
  oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      process.env.Access_Token, //test user token
      process.env.Access_Token_Secret, //test user secret
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      })
  })
}

module.exports = methods
