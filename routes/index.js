var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yash' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Yash' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Yash' });
});

router.get('/something', function(req, res, next) {
  res.render('something', { title: 'Yash' });
});


module.exports = router;
