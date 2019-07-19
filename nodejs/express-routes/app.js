const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const authenticate = require('./services/security').authenticate;
const userRoutes = require('./apis/users').userRoutes;
const projectRoutes = require('./apis/projects').projectRoutes;
const setContentHeader = require('./services/utils').setContentHeader;
// apply json parser
server.use(parser.json());
// apply cors
server.use(cors());

server.get('/status',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});

// access query params
// /message?name=Mohsin&email=tech@gma.com
server.get('/message',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        name : req.query.name,
        email : req.query.email
    }));
});
// un authorized access api
server.get('/unauthorize',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        message : "Oops! you seem to have tried with Invalid access or no access"
    }));
})

// enable authentication 
server.use('/users',(req,res,next)=>{
    authenticate(req,res,next);
});

server.use('/projects',(req,res,next)=>{
    authenticate(req,res,next);
});

// add routes to server
server.use('/users',userRoutes);
server.use('/projects',projectRoutes);

// PORT Binding
server.listen(1269,()=>{
    console.log('Server started at 1269');
});
