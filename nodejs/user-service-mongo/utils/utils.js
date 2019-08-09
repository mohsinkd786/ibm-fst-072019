const UserConstants = {
    mongo : {
        url :  'mongodb://localhost:27017',
        db : 'ibm_training',
        collections :{
            users : 'users'
        }
    },
    messages : {
        mainStatus : 'Service is running',
        userServiceStatus : 'User Service is Running'
    }
}

module.exports= {
    UserConstants
}