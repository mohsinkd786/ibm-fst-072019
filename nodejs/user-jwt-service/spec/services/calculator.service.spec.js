const calculatorService = require('../../services/calculator.service');

describe('Test Calculator service ',()=>{
    it('should give us sum of 4 & 5',()=>{
        // expected
        // actual
        const expected = calculatorService.add(4,5);
        const actual = 4 + 5;
        expect(expected).toBe(actual);
    });

    it('should not give us the correct sum of 4 & 5',()=>{
        // expected
        // actual
        const expected = calculatorService.add(4,5);
        const actual = 4 * 5;
        expect(expected).not.toBe(actual);
    });

    it('should give us quotient of 10 by 5',()=>{
        // expected
        // actual
        const expected = calculatorService.div(10,5);
        const actual = 10 / 5;
        expect(expected).toBe(actual);
    });

    it('should not give us quotient of 10 by 0',()=>{
        // expect(calculatorService.div(10,0)).toThrowError('Division by Zero');
        //calculatorService.div(10,0);
    });
});