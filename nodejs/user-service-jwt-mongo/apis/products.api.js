const server = require('express').Router();
const PService = require('../services/product.service').ProductService;
const pService = new PService();

// apis
server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : 'Product Service is Running'
    });
});

server.post('/add',(rq,rs)=>{
    rs.json({
        message : 'Product Add'
    });
});

server.get('/',(rq,rs)=>{
    pService.fetchProducts((err,products)=>{
        if(err){
            rs.status(500).json({
                message : 'Unable to process your request'
            });
        }else{
            rs.status(200).json({
                products : products
            });
        }
    })
});

module.exports = {
    server
}