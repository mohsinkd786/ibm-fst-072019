const projects = require('../db/projects').projects;
class ProjectService{
    projects=[];
    constructor(){
        this.projects = projects;
    }
    _all(){
        return this.projects;
    }
    _add(project){
        this.projects.push(project);
        return this.projects;
    }
}

module.exports.ProjectService = ProjectService;