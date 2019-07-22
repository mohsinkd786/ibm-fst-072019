const users = require('../dbs/users').users;
const jwt = require('jsonwebtoken');
const key = require('../keys/private').private_key;

class Service {
    constructor(){
        this.userTokens = new Map();
        this.users = users
    }
    register(user){
        this.users.push(user);
    }
    getAllUsers(){
        return this.users;
    }
    // verify if valid credentials
    isUser(userName,pass){
        return this.users.find((u)=>{
            return u.name == userName && u.pass == pass;
        });
    }
    generateToken(user){
        const data = {
            email : user.email,
            userName : user.name
        }
        const token = jwt.sign(data,key,{
            expiresIn : "1m"
        });
        return token;
    }
    validateToken(token){
        let isValid = false;
        try{
            isValid = jwt.verify(token,key);
        }catch(error){
            console.error(error);
        }   
        return isValid;    
    }
}

module.exports.Service = Service