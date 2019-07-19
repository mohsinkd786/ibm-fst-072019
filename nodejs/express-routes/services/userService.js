const users = require('../db/users').users;
class UserService{
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
    _nextId(){
        return this.users.length + 1;
    }
}

module.exports.UserService = UserService;