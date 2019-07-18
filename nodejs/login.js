const http = require('http');
const url = require('url');
const UService = require('./userservice').UserService;
// create object for user service
const _uService = new UService();
const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const urlParams = url.parse(req.url,true);
    if(urlParams.pathname === '/login'){
        res.setHeader('content-type','application/json');
        // call user service api
        const uDetails = _uService.getUser(urlParams.query.user,urlParams.query.pass);
        if(uDetails != undefined || uDetails != null){
            res.end(JSON.stringify(uDetails));
        }else{
            res.end(JSON.stringify({
                id: null,
                status : 'INVALID'
            }));
        }
    }
});
// port
server.listen(5544,()=>{
    console.log(`Server Started at 5544`);
});