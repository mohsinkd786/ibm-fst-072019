const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./apis/users').userRoutes;
const projectRoutes = require('./apis/projects').projectRoutes;
// apply json parser
server.use(parser.json());
// apply cors
server.use(cors());

server.get('/status',(req,res)=>{
    res.end(JSON.stringify({
        message: "Server is RUNNING"
    }));
});

// add routes to server
server.use('/users',userRoutes);
server.use('/projects',projectRoutes);

// PORT Binding
server.listen(1269,()=>{
    console.log('Server started at 1269');
});
