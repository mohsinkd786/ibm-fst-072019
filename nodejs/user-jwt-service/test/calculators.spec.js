const http = require('chai-http');
const chai = require('chai');
const _expect = chai.expect;
const server = require('../app').server;
// set http service in chai
chai.use(http);

describe('Verify Calculator API ',()=>{
    
    it('Sample Test',()=>{
        _expect("Test").to.equal("Test");
    });

    it('should return sum of 4 & 3',(done)=>{
        chai
        .request(server)
        .get('/calculators/add/4/3')
        .end((err,rs) =>{
            _expect(rs.body.result).to.equal(7);
            done();
        })
    })
});