const expect = require('expect');

const date = require('./date');

describe('The convert function', () => {

    it('should return an object', () => {
        let output = date.convert('May 5 1990'); 
        expect(output).toBeA('object');
    });

    it('should return an object with two string values when a valid date or timestamp is passed', () => {
         let output = date.convert('May 5 1990');
         expect(output.ts).toBeA('string');
         expect(output.ds).toBeA('string');
    });

    it('should return two null values when an invalid string is passed', () => {
        let output = date.convert('Hello'); 
        expect(output.ts).toBe('Timestamp: null');
        expect(output.ds).toBe('Date: null');
    });

    it('should convert a valid natural date into a timestamp', () => {
        let output = date.convert('Thu, 12 Jan 2017'); 
        expect(output.ts).toInclude(1484146800); 
    });

    it('should convert a timestamp into a natural date', () => {
        let output = date.convert('1483452479'); 
        expect(output.ds).toInclude('Tue Jan 03 2017'); 
    });


});