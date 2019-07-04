var http =require('http');
var app=require('./app');

const port = process.env.port || 3005;

const server = http.createServer(app);

server.listen(port, () => {
 console.log("Server started at port " + port)
});
