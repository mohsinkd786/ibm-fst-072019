const MongoClient = require('mongodb').MongoClient;
const UserConstants = require('../utils/utils').UserConstants; 
class UserService {

    fetchUsers(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection(UserConstants.mongo.collections.users).find({}).toArray((error,users)=>{
                if(!error){
                    console.log(users);
                    callback(users);
                }
            });
        });
    }

    add(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection(UserConstants.mongo.collections.users).insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    }
    findById(id,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn
            .db(UserConstants.mongo.db)
            .collection(UserConstants.mongo.collections.users)
            .find({ _id : id})
            .toArray((error,users)=>{
                console.log(users);
                callback(error,users);
            });
        })
    }
    getMongoClient(){ // returns promise for connection
        return MongoClient.connect(UserConstants.mongo.url);
    }
    getUserById(_id){ //returns promise for searched document
        return this
        .getMongoClient()
        .then(con=>{
            return con
            .db(UserConstants.mongo.db)
            .collection(UserConstants.mongo.collections.users)
            .find({ _id : parseInt(_id) })
            .toArray();
            // end of to array
        }).catch(err=>{
            console.log('Unable to establish the connection');
        });
    }  
}

module.exports = {
    UserService
}