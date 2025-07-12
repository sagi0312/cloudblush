const expensiveOperation = (num) => {
  let value = 0;
  for (let i = 0; i < 1000000; i++) {
    value += Math.sqrt(num);
  }
  return value.toFixed(2);
};

export const testWithoutProxy = () => {
  const t0 = performance.now();
  const result = expensiveOperation(50);
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `sad! took ${duration} ms to get ${result} `;
};

const cacheMap = new Map<number, number>();

const expensiveOperationProxy = new Proxy(expensiveOperation, {
  apply: (target, thisArg, args) => {
    const ourKey = args[0];
    if (cacheMap.has(ourKey)) {
      return cacheMap.get(ourKey);
    }
    const result = target.call(thisArg, ourKey);
    cacheMap.set(ourKey, result);
    return result;
  },
});

export const testWithProxy = () => {
  const t0 = performance.now();
  const result = expensiveOperationProxy(50);
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `yay! took ${duration} ms to get ${result} `;
};
