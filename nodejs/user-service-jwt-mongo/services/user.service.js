const client = require('mongodb').MongoClient;
const UserConstants = require('./util.service').UserConstants;
const bcrypt = require('bcrypt');

class Service {
    // verify user
    fetchUser(_user,_pass,callback){
        const hashPassword = this.generateHash(_pass);
        const _url = UserConstants.mongo.url + UserConstants.mongo.port;
        client.connect(_url,(err,connection)=>{
            connection.db(UserConstants.mongo.db).collection(UserConstants.mongo.collections.user).find({email: _user, password : hashPassword}).toArray((err,response)=>{
                callback(err,response);
            });
        });
    }
    // generate hash
    generateHash(_pass){
        return bcrypt.hashSync(_pass,1);
    }
    addUser(_user,callback){
        // update password
        _user.password = this.generateHash(_user.password);
        const _url = UserConstants.mongo.url + UserConstants.mongo.port;
        client.connect(_url,(err,connection)=>{
            connection.db(UserConstants.mongo.db).collection(UserConstants.mongo.collections.user).insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    } // end of add user
    // get all users
    fetchUsers(callback){
        const _url = UserConstants.mongo.url + UserConstants.mongo.port;
        client.connect(_url,(err,connection)=>{
            connection
            .db(UserConstants.mongo.db)
            .collection(UserConstants.mongo.collections.user)
            .find()
            .toArray((err,response)=>{
                callback(error,response);
            });
        });
    } // end of fetch user
}

module.exports={
    UserService : Service
}