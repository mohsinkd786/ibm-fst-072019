const server = require('express').Router();

// apis
server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'User Service is Running'
    });
});

server.get('/',(rq,rs)=>{
    rs.status(200).json({
        data : "Users"
    });
});

server.post('/add',(rq,rs)=>{
    rs.status(200).json({
        data : "Users"
    });
});

module.exports = {
    server
}