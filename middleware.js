// Use module exports to expose middleware
var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('Private route hit');
        next();
    },
    logger: function(req, res, next) {
        var date = new Date().toString();
        console.log(req.method + '' + req.originalUrl + ' at ' + date);
        next();
    }
};

module.exports = middleware; 
