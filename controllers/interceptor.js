var secrets = require('../config/secrets');

/**
 * GET /
 * Interceptor page.
 */

var fetchUrl = require("fetch").fetchUrl;
var rp = require('request-promise');

var config = {
	"ip": secrets.interceptorServer,
	"interceptorPort": secrets.interceptorPort,
}

var interceptorAPI = null;
if(process.argv[2] == 'dev'){
 interceptorAPI = config.ip + ':' + config.interceptorPort;
} else if(process.argv[2] == 'production') {
 interceptorAPI = '52.87.224.145:80';
}

/**
 * GET /
 * Interceptor logs methods.
 */

exports.logsOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/logs/overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.characterLengths = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/logs/character_lengths/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    res.send(body.toString());
  });
 //  res.render('foo/f01', {
 //    title: 'FOO 01'
 //  });
};

exports.wordLengths = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/logs/word_lengths/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.logHasWord = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/logs/has/word/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.eventSummary = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/logs/event_summary/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};


/**
 * GET /
 * Interceptor experiences methods.
 */

exports.experiencesOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/experiences/overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.experiencesStatistics = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/experiences/statistics/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.experienceHasWord = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/experiences/has/word/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.experienceContainsLog = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/experiences/contains/log/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

/**
 * GET /
 * Interceptor activities methods.
 */

exports.activitiesOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/activities/overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.activitiesStatistics = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/activities/statistics/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.activityHasWord = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/activities/has/word/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.activityContainsExperience = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/activities/contains/experience/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

/**
 * GET /
 * Interceptor activities methods.
 */

exports.userSpokeUniqueWord = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/users/spoke/unique_word/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

exports.userDidActivityWithLog = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/users/did/activity_with_log/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

/**
 * GET /
 * Interceptor friend methods.
 */

exports.friendsOverview = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
   }
  fetchUrl("http://" + interceptorAPI + "/friends/overview/" + req.query.credentials, options, function(error, meta, body){
    console.log(body.toString());
    console.log(req.query.credentials);
    res.send(body.toString());
  });
};

/**
 * POST /
 * Interceptor method to run affect scoring.
 */

exports.analyzeEmotionSet = function(req, res) {
  var options = {
 			 uri: "http://0.0.0.0:5000/nlp/analyze_emotion_set/",
       method: 'POST',
			 body: req.body,
			 json: true // Automatically stringifies the body to JSON
   }

	// console.log('here');
	// console.log(req.body);
	// console.log('======');

  rp(options)
	  .then(function(body){
	    // console.log(body);
	    res.send(JSON.stringify(body));
	  })
		.catch(function (err) {
			console.log(err);
	  });
};

/**
 * GET /
 * Interceptor method to retrieve all prior run analyses.
 */

exports.retrieveAllRunAnalyses = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
  }

	var query = req.query;

	// TODO: Make this variable for page/count based on request input
	var page = query.page
	var count_per_page = query.countPerPage
	// TODO: Make this variable for collection based on request input
	var collection = 'all_records'
  // fetchUrl("http://0.0.0.0:5000/nlp/analyses/test_a/1/10/", options, function(error, meta, body){
  fetchUrl("http://" + interceptorAPI + "/nlp/analyses/" + collection + "/" + page + "/" + count_per_page  + "/", options, function(error, meta, body){
    // console.log(body.toString());
    res.send(JSON.parse(body.toString()));
  });
};

exports.retrieveRunAnalysesStats = function(req, res) {
  var options = {
       headers:{
           "X-My-Header": "This is a custom header field"
       },
       method: 'GET'
  }

	// Get the total number of processes as part of the stats
	// TODO: Make this variable for collection based on request input
	var collection = 'all_records'
  fetchUrl("http://" + interceptorAPI + "/nlp/analyses/" + collection + "/stats/", options, function(error, meta, body){
    console.log(body.toString());
    res.send(JSON.parse(body.toString()));
  });
};
