var http = require('http');
var url = require('url');

// Create server object using the http module
http.createServer(function(req,res)
{
    // The first argument to writeHead is the status code, 200 means OK, 
    // The second argument is an object containing the response headers.
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query; //url.parse() parses the url into a query object
    var txt = q.year + " " + q.month; //txt reads 'q' and extracts the year and month
    res.end(txt); //End the Response and display 'txt'
}).listen(8080); //The server object listens on port 8080