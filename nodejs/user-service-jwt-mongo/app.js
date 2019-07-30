const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');

// apis
const userAPis = require('./apis/user.api').server;
const securityAPis = require('./apis/security.api').server;
const productAPis = require('./apis/products.api').server; 

// services
const SecurityService = require('./services/security.service').SecurityService;
const securityService = new SecurityService();
//
server.use(parser.json());
server.use(cors());

// apis
server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'Server is Running'
    });
});
// enable authentication
// secured access only
server.use('/products',(rq,rs,next)=>{
    securityService.authorize(rq,rs,next);
});

server.use('/users',userAPis);
server.use('/auth',securityAPis);
server.use('/products',productAPis);

const PORT = 46767;
server.listen(PORT,()=>{
    console.log(`Server is Started at ${PORT}`);
});

