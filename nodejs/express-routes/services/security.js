const users = require('../db/security').users;

const authenticate = (request,response,next)=>{
    const uname = request.headers.username;
    const password = request.headers.password;

    // search user in db
    let userExists = users.find((u)=>{
        return u.uname == uname && u.pass == password;
    });
    if(userExists){
        // allow the default flow
        next();
    }else{
        response.redirect('/unauthorize');
    }
}
module.exports.authenticate = authenticate;