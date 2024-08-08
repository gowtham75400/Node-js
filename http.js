var http = require('http')

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/plain'})
    console.log("Hello from server");
}).listen(8000)

console.log(`server is running at port : 8000 ${port}`);
