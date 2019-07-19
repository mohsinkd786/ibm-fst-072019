const setContentHeader = (res)=>{
    res.setHeader('content-type','application/json');
};

module.exports.setContentHeader = setContentHeader;