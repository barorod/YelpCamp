const express = require('express');
const router = express.Router();
const { storeReturnTo } = require('../middleware');
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');
const User = require('../models/user');

router
	.route('/register')
	.get(users.renderRegister)
	.post(catchAsync(users.register));

router
	.route('/login')
	.get((req, res) => {
		res.render('users/login');
	})
	.post(
		storeReturnTo,
		passport.authenticate('local', {
			failureFlash: true,
			failureRedirect: '/login',
		}),
		users.login
	);

router.post('/logout', users.logout);

module.exports = router;
