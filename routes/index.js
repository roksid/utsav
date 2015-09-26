var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: "Tweet"});
});

router.get('/google', passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/login' }),
	function(req, res) {
	// Successful authentication, redirect home.
	res.send({state: 'success', user: req.user ? req.user : null});
});
module.exports = router;
