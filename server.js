var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
var port = 3000;
app.use(serveStatic(__dirname));
app.listen(port);
console.log('You are connected at port '+port);
