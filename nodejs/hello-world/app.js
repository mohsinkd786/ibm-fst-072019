const express = require('express');
const server = express();
const parser = require('body-parser');

// inject parser in express server
server.use(parser.json());

// status api
server.get('/status',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(
        JSON.stringify({
            message : "Hello world Service is Running"
        }));
});

// message api
server.get('/message/:message',(req,res)=>{
    res.end(
        JSON.stringify({
            message : req.params.message
        })
    );
});

// calculate api
server.get('/calculate/:operand/:num1/:num2',(req,res)=>{
    res.end(JSON.stringify({
        result : parseInt(req.params.num1) + parseInt(req.params.num2)
    }));
});

// add user api
server.post('/user',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
        user :{
            name : req.body.name,
            email: req.body.email
        }
    }));
});

// PORT Binding
const PORT = 1224;
server.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
});