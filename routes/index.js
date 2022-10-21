var express = require('express');
var router = express.Router();

const launchTime = new Date('02/28/2023 11:59 PM').getTime()

/* GET home page. */
router.get('/', function(req, res, next) {
  const currentTime = new Date().getTime()
  const numberOfMilliseconds = parseInt(launchTime - currentTime)
  res.render('index', { title: 'How Long until FAI Site is due?', countDown: numberOfMilliseconds });
});

module.exports = router;
