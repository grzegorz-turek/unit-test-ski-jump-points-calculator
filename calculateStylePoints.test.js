const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('styleNotes', () => {
    it('should be properly calculated if all integers and all the same value', () => {
        const actual = calculateStylePoints([20, 20, 20, 20, 20]);

        const expected = 60;

        assert.equal(actual, expected);
    });

    it('should be properly calculated if all integers and all different value', () => {
        const actual = calculateStylePoints([20, 19, 18, 17, 16]);

        const expected = 54;

        assert.equal(actual, expected);
    });

    it('should be properly calculated if all decimal fractions rounded to .5 and all the same value', () => {
        const actual = calculateStylePoints([19.5, 19.5, 19.5, 15.5, 19.5]);

        const expected = 58.5;

        assert.equal(actual, expected);
    });

    it('should be properly calculated if all decimal fractions rounded to .5 and all different value', () => {
        const actual = calculateStylePoints([19.5, 18.5, 17.5, 16.5, 15.5]);

        const expected = 52.5;

        assert.equal(actual, expected);
    });

    it('should be properly calculated if all mixed', () => {
        const actual = calculateStylePoints([20, 19.5, 18.5, 17, 16.5]);

        const expected = 55;

        assert.equal(actual, expected);
    });

});
