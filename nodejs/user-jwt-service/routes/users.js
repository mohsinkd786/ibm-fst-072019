const router = require('express').Router();
const Service = require('../services/user.service').Service;
const service = new Service();
// status api
router.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'User Service is running'
    });
});

// sign up 
router.post('/register',(rq,rs)=>{
    service.register(rq.body);
    rs.status(200).json({
        message : 'User has been registered successfully'
    });
});

// show all users
router.get('/',(rq,rs)=>{
    rs.status(200).json({
        message : 'Users',
        data : service.getAllUsers()
    });
});

// login 
router.get('/login',(rq,rs)=>{
    rs.status(200).json({
        message : 'User logged in successfully'
    });
});

// generate token
router.post('/token',(rq,rs)=>{
    // generate token
    const userExists = service.isUser(rq.body.user,rq.body.pass);
    if(userExists){
        const token = service.generateToken(userExists);
        rs.status(200).json({
            message : 'Token Generated Successfully',
            token : token
        })
    }else{
        rs.status(400).json({
            message : 'Invalid User credentials'
        });
    }
});

module.exports.useRoutes = router;