const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('distance points', () => {
    it('should be properly calculated for normal hill, distance set to integer and kPoint set to integer', () => {
        const actual = calculateDistancePoints(130, 'nor', 120);

        const expected = 80;

        assert.equal(actual, expected);
    });

    it('should be properly calculated for normal hill, distance set to decimal fraction rounded to .5 and kPoint set to integer', () => {
        const actual = calculateDistancePoints(130.5, 'nor', 120);

        const expected = 81;

        assert.equal(actual, expected);
    });

    it('should be properly calculated for big hill, distance set to integer and kPoint set to integer', () => {
        const actual = calculateDistancePoints(130, 'big', 120);

        const expected = 78;

        assert.equal(actual, expected);
    });

    it('should be properly calculated for big hill, distance set to decimal fraction rounded to .5 and kPoint set to integer', () => {
        const actual = calculateDistancePoints(130.5, 'big', 120);

        const expected = 78.9;

        assert.equal(actual, expected);
    });

    it('should be properly calculated for mamooth hill, distance set to integer and kPoint set to integer', () => {
        const actual = calculateDistancePoints(130, 'mam', 120);

        const expected = 132;

        assert.equal(actual, expected);
    });

    it('should be properly calculated for mamooth hill, distance set to decimal fraction rounded to .5 and kPoint set to integer', () => {
        const actual = calculateDistancePoints(130.5, 'mam', 120);

        const expected = 132.6;

        assert.equal(actual, expected);
    });

    it('should return the message that hillSize parameter is out of selection, namely \'nor\', \'big\' or \'mam\'', () => {
        const actual = calculateDistancePoints(130.5, 'ma', 120);

        const expected = undefined;

        assert.equal(actual, expected);
    });

    it('should return the message that distance parameter is negative (-)', () => {
        const actual = calculateDistancePoints(-130.5, 'mam', 120);

        const expected = undefined;

        assert.equal(actual, expected);
    });

    it('should return the message that distance parameter is not an integer or decimal fraction rounded to .5 (-)', () => {
        const actual = calculateDistancePoints(130.3, 'mam', 120);

        const expected = undefined;

        assert.equal(actual, expected);
    });

    it('should return the message that kPoint parameter is not an integer', () => {
        const actual = calculateDistancePoints(130, 'mam', 120.5);

        const expected = undefined;

        assert.equal(actual, expected);
    });

    it('should return the message that kPoint parameter is negative (-)', () => {
        const actual = calculateDistancePoints(130, 'mam', -120);

        const expected = undefined;

        assert.equal(actual, expected);
    });
});