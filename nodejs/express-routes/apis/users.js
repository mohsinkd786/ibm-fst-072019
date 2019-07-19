const server = require('express').Router();
const UService = require('../services/userService').UserService;
const userService = new UService();

// get all users
server.get('/',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
        users : userService._all()
    }));
});

// add a new user
server.post('/add',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
        users : userService._add(req.body)
    }));
});

module.exports.userRoutes = server;
