const route = require('express').Router();
const calc = require('../services/calculator.service');

route.get('/add/:one/:two',(rq,rs)=>{
    rs.status(200).json({
        result : calc.add(parseInt(rq.params.one),parseInt(rq.params.two))
    })
})

module.exports= {
    calcRoutes : route
}