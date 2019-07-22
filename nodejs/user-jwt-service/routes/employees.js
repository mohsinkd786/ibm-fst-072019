const routes = require('express').Router();

routes.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'Employee Service is Running'
    });
});

module.exports.empRoutes = routes;