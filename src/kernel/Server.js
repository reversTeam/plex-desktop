var http = require('http');
var path = require('path');
var fs = require('fs');

var Server = function (app, host, port) {
    this.server = null;

    this.extensions = {};

    this.host = host;
    this.port = port;
    this.app = app;
};


Server.prototype.initApplication = function () {
    this._initApplication(this.application);
};

Server.prototype.start = function () {
    this.server = http.createServer(this.reception.bind(this));
    this._start(this.app, this.server);
    this.server.listen(this.port);
};

Server.prototype.reception = function (req, res) {
    var app = this.app;
    filepath = app.getUrl(req.url);

    // Todo : build a rooting system
    // Todo : detach reception and execution power
    if (app.config.exclude_path.indexOf(req.url) !== -1) {
        this.render(res, app.getIndexUrl());
    } else if (fs.existsSync(app.getUrl(req.url))) {
        this.render(res, app.getUrl(req.url));
    } else {
        this.render(res, app.getIndexUrl());
    }
};

Server.prototype.render = function (res, filepath) {
    var app = this.app;
    var ext = path.extname(filepath);

    // todo : manage headers HTTP
    res.writeHead(200, {
        'Content-Type': app.config.extension[ext],
    } );

    console.log(app.config.extension[ext] +' :-> '+ filepath);
    res.write(fs.readFileSync(filepath));

    res.end();
};

Server.prototype._start = function (app, server) {
    this.initApplication(app);
};

Server.prototype._initApplication = function (application) {
    
};

module.exports = Server;
