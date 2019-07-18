const users = require('./users').users;

class UserService{
    
    getUser(_uname,_pass){
        return users.find((u)=>{
            return u.uname == _uname && u.pass == _pass
        });
    }
}

module.exports = {
    UserService
}