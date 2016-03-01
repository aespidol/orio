'use strict';

// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');

// var fs = require('fs')
// var request = require('request')
// var cheerio = require('cheerio')

// instantiate the app
var app = express();
//  Read server responses
var bodyParser = require('body-parser');
// Parse Ical File
var ical = require('ical');


app.use(bodyParser.json());
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')))
app.use('/bower_components', express.static(__dirname + "/bower_components"))

// var database = require('./config/mongoose.js');

var routes = require('./config/routes.js')(app, ical);

// app.get('/scrape', function(req,res){
// 	var url = 'https://www.facebook.com/events/birthdays';

// 	request(url, function(error, response, html){
// 		if(!error){
// 			var $ = cheerio.load(html);

// 			$("._1zv1").filter(function(){
// 				console.log($(this).text())
// 			})
// 		}
// 	})
// })

var server = app.listen(8000, function() {
  console.log('WE ARE LISTENING: 8000');
});

 