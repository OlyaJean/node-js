const http = require('http');

const server = http.createServer((req,res)=>{
const url = req.url;
if(url === '/'){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Home page');
}else if(url === '/projects'){

    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Project page');
}else{
    res.writeHead(404,{'Content-Type' : 'text/plain'});
    res.end('Page is NOT found');
    //any other url will have 404 page
}
});

const port = 3000;

server.listen(port,()=>{
    console.log(`The server listens to port ${port}`)})
;