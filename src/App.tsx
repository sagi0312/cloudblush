import { useState } from "react";
import { FlyweightDemo } from "./FlyweightDemo";
import { ProxyDemo } from "./ProxyDemo";

export const App = () => {
  const [current, setCurrent] = useState("flyweight");

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          padding: "2rem",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setCurrent("flyweight")}
          className="button"
          style={{ backgroundColor: "gray" }}
        >
          Flyweight Pattern
        </button>
        <button
          onClick={() => setCurrent("proxy")}
          className="button"
          style={{ backgroundColor: "gray" }}
        >
          Proxy Pattern
        </button>
      </div>
      {current === "flyweight" ? <FlyweightDemo /> : <ProxyDemo />}
    </>
  );
};
