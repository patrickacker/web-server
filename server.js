var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; // if no process.env THEN use 3000

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('Check us out!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
    console.log('Express server started on port ' + PORT);
});
