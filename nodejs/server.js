const server = require('http');

// create Http Server
const http = server.createServer((request,response)=>{
    if(request.url === '/status'){
        response.end('Welcome to Node js');
    }else if (request.url === '/user' && request.method === 'POST'){
        response.setHeader('content-type','application/json');
        response.end(JSON.stringify({
            id : 1,
            name : 'Bob'
        }));
    }
});

// bind to port

const port = parseInt(process.argv[2] || '1234');
http.listen(port,()=>{
    console.log(`Server Started at ${port}`);
});