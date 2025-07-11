import React, { useState } from "react";

export const ProxyDemo = () => {
  const [withoutProxyResult, setWithoutProxyResult] = useState<string>("");
  const [withProxyResult, setWithProxyResult] = useState<string>("");

  const expensiveOperation = () => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(50);
    }
    return result.toFixed(2);
  };

  const cache = new Map();

  const cachedOperation = new Proxy(expensiveOperation, {
    apply: (target, thisArg, args) => {
      const key = args[0];

      if (cache.has(key)) {
        return cache.get(key);
      }

      const result = target.apply(thisArg, args);
      cache.set(key, result);
      return result;
    },
  });

  const testWithoutProxy = () => {
    const start = performance.now();
    const result = expensiveOperation();
    const end = performance.now();
    const time = (end - start).toFixed(2);
    setWithoutProxyResult(`${time}ms - Result: ${result}`);
  };

  const testWithProxy = () => {
    const start = performance.now();
    const result = cachedOperation();
    const end = performance.now();
    const time = (end - start).toFixed(2);
    setWithProxyResult(`${time}ms - Result: ${result}`);
  };

  return (
    <div>
      <h1>Proxy Pattern Demo</h1>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={testWithoutProxy} className="button">
          Without Proxy
        </button>
        <button onClick={testWithProxy} className="button">
          With Proxy
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <br />
        {withoutProxyResult}
        <br />
        {withProxyResult}
      </div>
    </div>
  );
};
