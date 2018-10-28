module.exports = (...args) => {
  const argsArr = args;
  return function innerFunction(...innerArgs) {
    const firstArg = innerArgs[0];
    if (typeof firstArg !== 'function') {
      argsArr.push(...innerArgs);
      return innerFunction;
    }
    return argsArr.reduce((acc, value) => firstArg(acc, value), 0);
  };
};
