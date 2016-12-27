var _ = require('lodash');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var passport = require('passport');
var User = require('../models/User');
var secrets = require('../config/secrets');


/**
 * Require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(401).send({
			message: 'User is not logged in'
		});
	}

	next();
};

/**
 * POST /postRemoteLogout
 * Log out.
 */
exports.postRemoteLogout = function(req, res) {
  req.logout();
  res.send({ customCode: 2001, status: 'Success', msg: 'Success! You are logged out.' });
};

/**
 * POST /signup
 * Create a new local account.
 */
exports.postRemoteSignup = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password must be at least 4 characters long').len(4);
  req.assert('confirmPassword', 'Passwords do not match').equals(req.assert('password').value);

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.send({ customCode: 4031, status: 'Failure', errors: errors })
  }

  var user = new User({
    email: req.assert('email').value,
    password: req.assert('password').value
  });

console.log(req.assert('email').value);

  User.findOne({ email: req.assert('email').value }, function(err, existingUser) {
    if (existingUser) {
      req.flash('errors', { msg: 'Account with that email address already exists.' });
      return res.send({ customCode: 4032, status: 'Failure', msg: 'Account with that email address already exists.' })
    }
    user.save(function(err) {
      if (err) return next(err);
      req.logIn(user, function(err) {
        if (err) return next(err);
        return res.send({ _id: user._id, customCode: 2001, status: 'Success', msg: 'Success! You have a new account, and you logged in.' })
      });
    });
  });
};

/**
 * POST /postRemoteLogin
 * Sign in using email and password.
 */
exports.postRemoteLogin = function(req, res, next) {

	// TODO: Forward to fixed gateway
	console.log('herfsfsdfdsfe===========');

};
