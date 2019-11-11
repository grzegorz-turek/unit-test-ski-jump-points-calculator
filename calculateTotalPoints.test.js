const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('total points', () => {
    describe('windFactor', () => {
        it('should be properly calculated if positive value (+)', () => {
            const actual = calculateTotalPoints(130, 'nor', 120, [20, 19, 19, 18, 19], 20, 20);
    
            const expected = 177;
    
            assert.equal(actual, expected);
        });

        it('should be properly calculated if negative value (-)', () => {
            const actual = calculateTotalPoints(130, 'nor', 120, [20, 19, 19, 18, 19], -20, 20);
    
            const expected = 137;
    
            assert.equal(actual, expected);
        });
    });

    describe('gateFactor', () => {
        it('should be properly calculated if positive value (+)', () => {
            const actual = calculateTotalPoints(130, 'nor', 120, [20, 19, 19, 18, 19], 20, 20);
    
            const expected = 177;
    
            assert.equal(actual, expected);
        });

        it('should be properly calculated if negative value (-)', () => {
            const actual = calculateTotalPoints(130, 'nor', 120, [20, 19, 19, 18, 19], -20, 20);
    
            const expected = 137;
    
            assert.equal(actual, expected);
        });
    });
});