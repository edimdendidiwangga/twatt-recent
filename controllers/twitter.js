let model = require('../models/twitter_data')
const methods = {}

methods.searchTweets = function(req, res) {
  let search = req.params.search;
  model.getOauthTwitter(function(oauth){
    oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${search}&result_type=recent&count=2`,
        process.env.Access_Token, //test user token
        process.env.Access_Token_Secret, //test user secret
        function (e, data){
          if (e) console.error(e);
          let status = JSON.parse(data)
          res.send(status)
        })
    })
}

methods.timelineTweets = function(req, res) {
  model.getOauthTwitter(function(oauth){
  oauth.get(
      //'https://api.twitter.com/1.1/statuses/home_timeline.json',
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=edim_dendy&count=2',
      process.env.Access_Token, //test user token
      process.env.Access_Token_Secret, //test user secret
      function (e, data){
        if (e) console.error(e);
        let timeline = JSON.parse(data)
        res.send(timeline)
      })
  })
}

module.exports = methods
