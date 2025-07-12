import React, { useState } from "react";
import { testWithoutProxy, testWithProxy } from "./utils/proxyUtils";

export const ProxyDemo = () => {
  const [withoutProxyResult, setWithoutProxyResult] = useState<string>("");
  const [withProxyResult, setWithProxyResult] = useState<string>("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <p>Running an expensive math operation</p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setWithoutProxyResult(testWithoutProxy)}
            className="button"
          >
            No Proxy
          </button>
          <b>{withoutProxyResult}</b>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setWithProxyResult(testWithProxy)}
            className="button"
          >
            Yes Proxy
          </button>

          <b>{withProxyResult}</b>
        </div>
      </div>
    </>
  );
};
