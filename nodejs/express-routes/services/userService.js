const users = require('../db/users').users;
class UserService{
    users=[];
    constructor(){
        this.users = users;
    }
    _all(){
        return this.users;
    }
    _add(user){
        this.users.push(user);
        return this.users;
    }
}

module.exports.UserService = UserService;