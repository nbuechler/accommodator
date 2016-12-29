var _ = require('lodash');
var async = require('async');
var User = require('../models/User');
var secrets = require('../config/secrets');
var fetchUrl = require('fetch').fetchUrl;

var config = {
	"ip": secrets.gatewayServer,
	"gatewayPort": secrets.gatewayPort,
}

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
	// This method redirect authentication to fixed-gateway at port 9000

	//postRemoteLogin (remote to :9000)
	var options = {
		// headers:{
		// 	"X-My-Header": "This is a custom header field"
		// },
		method: 'post',
	};

	var email = req.query.email
	var password = req.query.password

	fetchUrl('http://' + config.ip + ':' + config.gatewayPort + '/postRemoteLogout',
		options,
		function(error, meta, body){
			if (error) {
				res.status(400).send(error);
			} else {
				res.send('OK');
			}
	});

};

/**
 * POST /signup
 * Create a new local account.
 */
exports.postRemoteSignup = function(req, res, next) {
	// This method redirect authentication to fixed-gateway at port 9000

		//postRemoteLogin (remote to :9000)
		var options = {
			// headers:{
			// 	"X-My-Header": "This is a custom header field"
			// },
			method: 'post',
			payload: '{}'
		};

		var email = req.query.email
		var password = req.query.password
	  var confirmPassword = req.query.confirmPassword;

		fetchUrl('http://' + config.ip + ':' + config.gatewayPort + '/postRemoteSignup' + '/?email=' + email + '&password=' + password + '&confirmPassword=' + confirmPassword,
			options,
			function(error, meta, body){
				if (error) {
					res.status(400).send(error);
				} else {
					res.send(body.toString());
				}

		});

};

/**
 * POST /postRemoteLogin
 * Sign in using email and password.
 */
exports.postRemoteLogin = function(req, res, next) {
	// This method redirect authentication to fixed-gateway at port 9000

	//postRemoteLogin (remote to :9000)
	var options = {
		// headers:{
		// 	"X-My-Header": "This is a custom header field"
		// },
		method: 'post',
	};

	var email = req.query.email
	var password = req.query.password

	fetchUrl('http://' + config.ip + ':' + config.gatewayPort + '/postRemoteLogin' + '/?email=' + email + '&password=' + password,
		options,
		function(error, meta, body){
			if (error) {
				res.status(400).send(error);
			} else {
				res.send(body.toString());
			}

	});

};
