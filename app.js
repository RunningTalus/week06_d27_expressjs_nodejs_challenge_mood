var express = require('express');
var app = express();
var _ = require('underscore');

// app.get('/', function(req, res) {
// 	res.send('<h1>Hello Boulder</h1>');
// });

app.get('/', function(req, res) {
	res.send( _.sample (['happy', 'sad', 'joyful', 'antsy', 'ecstatic', 'despondent','frustrated', 'tired', 'excited', 'hangry', 'hanxious']) );
});

var server = app.listen(3159, function() {
	console.log('Express server listening on port ' + server.address().port);
});
