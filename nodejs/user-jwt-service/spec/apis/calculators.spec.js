const request = require('request');

describe('Verify Calculator API ',()=>{
    let url='';
    let result;
    let num1 = 10;
    let num2 = 2;
    // setup functions
    beforeAll(()=>{
        url =  'http://localhost:6668/calculators';
        console.log('Before ALl gets called once per describe');
    });

    beforeEach(()=>{
        result = '';
        console.log('Before every test case');
    });

    // tear down functions

    afterAll(()=>{
        console.log('After All gets called once per describe after all the test cases have been triggered');
    });
    
    afterEach(()=>{
        console.log('After every test case');
    });

    it(`should return the sum of ${num1} & ${num2} `,(jasmineCallback)=>{
        request
        .get(`${url}/add/${num1}/${num2}`,(err,rs,result)=>{
            rs.statusCode;
            expect(JSON.stringify({ result : num1 + num2})).toBe(result);
            jasmineCallback();
        });
    });
});