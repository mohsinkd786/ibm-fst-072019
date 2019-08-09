const routes = require('express').Router();
const UserService = require('../services/user.service').UserService;
const userService = new UserService();
const UserConstants = require('../utils/utils').UserConstants;

routes.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : UserConstants.messages.userServiceStatus
    });
});

routes.get('/',(rq,rs)=>{
    userService.fetchUsers((users)=>{
        rs.status(200).json({
            message : 'Users Fetched',
            users : users
        })
    });    
});
// add a new user
routes.post('/add',(rq,rs)=>{
    userService.add(rq.body,(err,result)=>{
        if(err){
            rs.status(400).json({
                message : 'Unable to process the request'
            });
        }else{
            rs.status(200).json({
                message : 'User created Successfully',
                result : result
            });
        }
    });
});

// find user by id
routes.get('/:id',(rq,rs)=>{
    userService.findById(rq.params.id,(err,user)=>{
        if(err){
            rs.status(400).json({
                message : 'Unable to process the request',
                error : err
            });
        }else{
            rs.status(200).json({
                user : user
            });
        }
    });
});

//
routes.get('/asy/user/:id',(rq,rs)=>{
    userService
        .getUserById(rq.params.id)
        .then(_usr=>{
            rs.json({
                message : 'Hello',
                userDetails: _usr
            });
        })
        .catch(err=>{
            rs.json({
                message : 'Unable to get User Details',
                error: err
            });
        })

    
})
module.exports = {
    userRoutes : routes
}