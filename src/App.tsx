import { useState } from "react";
import { FlyweightDemo } from "./FlyweightDemo";
import { ProxyDemo } from "./ProxyDemo";

export const App = () => {
  const [current, setCurrent] = useState<"flyweight" | "proxy" | "">("");

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        {current === "" && <h1>Flyweight/Proxy Pattern Demo</h1>}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <button
            onClick={() => setCurrent("flyweight")}
            className="button"
            style={{ backgroundColor: "gray" }}
          >
            Flyweight
          </button>
          <button
            onClick={() => setCurrent("proxy")}
            className="button"
            style={{ backgroundColor: "gray" }}
          >
            Proxy
          </button>
        </nav>
        {current === "flyweight" && <h1>Flyweight Pattern Demo</h1>}
        {current === "proxy" && <h1>Proxy Pattern Demo</h1>}
      </div>

      {/* Content */}
      <div style={{ padding: "2rem" }}>
        {current === "flyweight" && <FlyweightDemo />}
        {current === "proxy" && <ProxyDemo />}
      </div>
    </div>
  );
};
