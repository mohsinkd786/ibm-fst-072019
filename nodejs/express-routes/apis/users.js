const server = require('express').Router();
const UService = require('../services/userService').UserService;
const userService = new UService();
const setContentHeader = require('../services/utils').setContentHeader;

// get all users
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        users : userService._all()
    }));
});

// add a new user
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        users : userService._add(req.body)
    }));
});

server.get('/nextId',(req,res)=>{
    setContentHeader(res);
    res.end(
        JSON.stringify({
            nextId : userService._nextId()
        })
    );
})
module.exports.userRoutes = server;
