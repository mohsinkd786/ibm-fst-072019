const users = require('../dbs/users').users;
const jwt = require('jsonwebtoken');
const key = require('../keys/private').private_key;
const Email = require('./email.service').Email;
const emailService = new Email();

class Service {
    constructor(){
        this.userTokens = new Map();
        this.users = users
    }
    register(user){
        this.email(user);
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
    email(user){
        let userObj ={
            subject : "User Registration",
            body : `<div>Dear <b>${user.name}</b></div>
                    <div>Thank you for registering</div>`,
            from : null,
            to : user.email
        }
        emailService.email(userObj);
    }
}

module.exports.Service = Service