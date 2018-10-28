const assert = require('assert');
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');
const recursion = require('./src/recursion');

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

describe('recursion', () => {
  it('1', () => {
    const tree = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
    const result = recursion(tree);
    assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('2', () => {
    const tree = { value: 1024, left: { value: 989, left: { value: 755, left: { value: 400, left: { value: 238, left: { value: 100 } }, right: { value: 654 } }, right: { value: 800 } }, right: { value: 995 } }, right: { value: 2012, left: { value: 1025, right: { value: 1040, right: { value: 1850 } } } } };
    const result = recursion(tree);
    assert.deepEqual(result, [[1024], [989, 2012], [755, 995, 1025], [400, 800, 1040], [238, 654, 1850], [100]]);
  });
});
