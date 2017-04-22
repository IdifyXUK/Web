var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Idify' });
});

router.get('/joinidify', function(req, res, next){
	res.render('signup', {title: 'Join Idify'})
});

router.get('/login', function(req, res, next){
	res.render('login', {title: 'Idify'})
});

module.exports = router;
