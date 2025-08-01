const superExpensiveOperation = (input: number) => {
  let value = 0;
  for (let i = 0; i < 1000000; i++) {
    value += Math.sqrt(input);
  }
  return value.toFixed(2);
};

export const testWithoutProxy = () => {
  const t0 = performance.now();
  const result = superExpensiveOperation(50);
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `It took ${duration}ms to generate ${result}`;
};

const cacheMap = new Map<number, number>();
const superExpensiveOperationProxy = new Proxy(superExpensiveOperation, {
  apply: (target, thisArgs, args) => {
    const currArg = args[0];
    if (cacheMap.has(currArg)) {
      return cacheMap.get(currArg);
    }
    const result = target.call(thisArgs, currArg);
    cacheMap.set(currArg, result);
    return result;
  },
});

export const testWithProxy = () => {
  const t0 = performance.now();
  const result = superExpensiveOperationProxy(50);
  const t1 = performance.now();
  const duration = (t1 - t0).toFixed(2);
  return `It took ${duration}ms to generate ${result}`;
};
