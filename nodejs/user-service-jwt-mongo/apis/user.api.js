const server = require('express').Router();

// apis
server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'User Service is Running'
    });
});

server.get('/',(rq,rs)=>{
    rs.status(200).json({
        data : "USers"
    });
});

server.post('/add',(rq,rs)=>{
    rs.status(200).json({
        data : "USers"
    });
});

module.exports = {
    server
}