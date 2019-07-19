const server = require('express').Router();
const PService = require('../services/projectService').ProjectService;
const projectService = new PService();

// get all projects
server.get('/',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
        projects : projectService._all()
    }));
});

// add a new project
server.post('/add',(req,res)=>{
    res.setHeader('content-type','application/json');
    res.end(JSON.stringify({
        projects : projectService._add(req.body)
    }));
});

module.exports.projectRoutes = server;
