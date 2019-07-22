const express = require('express');
const server = express();
const parser = require('body-parser');
const useRoutes = require('./routes/users').useRoutes;
const empRoutes = require('./routes/employees').empRoutes;
const validate = require('./services/security.service').validate;

server.use(parser.json());

server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'Service is running'
    });
});

// unauthorized access attempt
server.get('/unauthorize',(rq,rs)=>{
    rs.status(401).json({
        message : 'Unauthorized Access'
    });
});

// verify token
server.use('/employees',(rq,rs,next)=>{
    validate(rq,rs,next);
});


// map user routes
server.use('/users',useRoutes);

server.use('/employees',empRoutes);

//PORT
const PORT = 6668;

server.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
});