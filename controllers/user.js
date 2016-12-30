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
 * Global authentication variables
 */

 var email = undefined;
 var password = undefined;
 var confirmPassword = undefined;

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

			if (reqQueryStringLength > 0) {
				email = req.query.email
				password = req.query.password
			  confirmPassword = req.query.confirmPassword;
			} else {
				email = req.body.email;
				password = req.body.password;
			  confirmPassword = req.body.confirmPassword;
			}

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

	var reqQueryStringLength = Object.keys(req.query).length;

	if (reqQueryStringLength > 0) {
		email = req.query.email
		password = req.query.password
	} else {
		email = req.body.email;
		password = req.body.password;
	}

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
