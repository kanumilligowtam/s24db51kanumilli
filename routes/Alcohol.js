var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Alcohol', { title: 'Search results of Alcohol'});
});

module.exports = router;