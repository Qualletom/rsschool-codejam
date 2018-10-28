module.exports = (arr) => {
  const sum = arr.reduce((acc, value) => {
    acc += value;
    return acc;
  }, 0);
  return arr.map(value => sum - value);
};
