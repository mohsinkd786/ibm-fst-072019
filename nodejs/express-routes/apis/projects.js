const server = require('express').Router();
const PService = require('../services/projectService').ProjectService;
const projectService = new PService();
const setContentHeader = require('../services/utils').setContentHeader;

// get all projects
server.get('/',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        projects : projectService._all()
    }));
});

// add a new project
server.post('/add',(req,res)=>{
    setContentHeader(res);
    res.end(JSON.stringify({
        projects : projectService._add(req.body)
    }));
});

module.exports.projectRoutes = server;
