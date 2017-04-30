const router = require('express').Router();
const twitterController = require('../controllers/twitter')

router.get('/search/:search', twitterController.searchTweets)
router.get('/timeline', twitterController.timelineTweets)

module.exports = router
