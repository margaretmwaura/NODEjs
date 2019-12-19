var http = require('http');
var request = require("request");

//This is used to listen to a particular port
var server=http.createServer((function(request,response)
{
    response.writeHead(200,
        {"Content-Type" : "text/plain"});
    response.end("Hello World\n");
}));
server.listen(7000);


//This is used to get data from another site
request("http://www.google.com",function(error,response,body)
{
    console.log(body);
});