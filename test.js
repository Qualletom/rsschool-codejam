const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');

describe('sumOfOther', () => {
  it('1', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('2', () => {
    const result = sumOfOther([-1, -10, 15, 48, 0, 0, 0, 654, 2978, 347, 35, 48, 546, 749]);
    assert.deepEqual(result, [5410, 5419, 5394, 5361, 5409, 5409, 5409, 4755, 2431, 5062, 5374, 5361, 4863, 4660]);
  });

  it('3', () => {
    const result = sumOfOther([-1, -10, -20, -34, -120, -341, -52, -41]);
    assert.deepEqual(result, [-618, -609, -599, -585, -499, -278, -567, -578]);
  });
});

function sum(a, b) {
  return a + b;
}

describe('make', () => {
  it('1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('2', () => {
    const result = make(15)(2)(sum);
    assert.equal(result, 17);
  });

  it('3', () => {
    const result = make(15)(2, -10)(100)(65, 98, 57)(21, 65)(sum);
    assert.equal(result, 413);
  });

  it('4', () => {
    const result = make(15, 10, 258, 74, 823, 876)(-20)(sum);
    assert.equal(result, 2036);
  });
});
