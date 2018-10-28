const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');

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
