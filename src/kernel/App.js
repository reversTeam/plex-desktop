var path = require('path');

/**
 * Create an application
 *    - path_name : Directory of your package
 *    - path : Cache of your path
 *    - index : Default file path
 *    - extension : { 'key' : 'path' } specifique directory for each assets
 *    - exclude_path : [ '/', 'dev.html', 'index.html' ] exclude path
 **/
var App = function (path_name) {
    this.name = path_name;
    this.config = {
        'path_name' : path_name,
        'path' : path.normalize(__dirname +'/../../'+ path_name +'/'),
        'index' : 'index.html',
        'extension' : {
            ".html" : "text/html",
            ".js"	: "application/javascript",
            ".css"	: "text/css",
            ".jpg"	: "image/jpeg",
            ".png"	: "image/png",
            ".ico"	: "image/ico"
        },
        'exclude_path' : [
            '/', 'dev.html', 'index.html',
        ]
    };
};

// Todo : Build cache system
App.prototype.getUrl = function (url) {
    return path.normalize(this.config.path + url);
};

// Todo : Build cache system
App.prototype.getIndexUrl = function () {
    return path.normalize(this.config.path + this.config.index);
};

module.exports = App;
