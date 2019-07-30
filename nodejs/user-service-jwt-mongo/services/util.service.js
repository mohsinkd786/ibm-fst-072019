const UserConstants = {
    mongo: {
        url : 'mongodb://localhost:',
        port : 27017,
        db : 'userjwt',
        collections: {
            user : 'user',
            security : 'security',
            product : 'product'
        }
    },
    jwt :{
        key : 'thisisourjwtprivatekey'
    }
}

module.exports = {
    UserConstants
}