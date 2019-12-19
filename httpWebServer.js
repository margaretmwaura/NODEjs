let http = require('http');
let request = require("request");
let  url = require('url');
let fs = require('fs');
//This is used to listen to a particular port


let handleRequest = (request, response) => {

    let path = url.parse(request.url).pathname;
    console.log(path);
    if(path == '/')
    {

        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    }

    if(path == '/listfile')
    {

        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./list.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
};


request("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json",function(error,response,body)
{
    // console.log(body);

    fs.writeFile('./result.json', body, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

});
http.createServer(handleRequest).listen(7000);
