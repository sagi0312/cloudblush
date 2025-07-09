import { useState } from "react";
import { generateWithFlyweight } from "./withFlyweight";
import { generateWithoutFlyweight } from "./withoutFlyweight";

export const App = () => {
  const [current, setCurrent] = useState("flyweight");
  const [withFlyweight, setWithFlyweight] = useState("");
  const [withNoFlyweight, setWithNoFlyweight] = useState("");
  const [withProxy, setWithProxy] = useState("");
  const [withNoProxy, setWithNoProxy] = useState("");

  const handleFlyweightClick = () => {
    const result = generateWithFlyweight();
    setWithFlyweight(result);
  };

  const handleNoFlyweightClick = () => {
    const result = generateWithoutFlyweight();
    setWithNoFlyweight(result);
  };

  const handleProxyClick = () => {
    // Simulate proxy pattern logic here
    const result = "✅ With Proxy: Simulated proxy logic";
    setWithProxy(result);
  };

  const handleNoProxyClick = () => {
    // Simulate no proxy logic here
    const result = "❌ Without Proxy: Simulated no proxy logic";
    setWithNoProxy(result);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <button onClick={() => setCurrent("flyweight")} className="button">
          Flyweight Pattern
        </button>
        <button onClick={() => setCurrent("proxy")} className="button">
          Proxy Pattern
        </button>
      </div>
      {current === "flyweight" ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1>Flyweight Pattern Demo</h1>
          <p>Creating 100,000 books with 20KB content each</p>

          <div>
            <button onClick={handleFlyweightClick} className="button">
              With Flyweight
            </button>
            <br />
            <br />
            <button className="button" onClick={handleNoFlyweightClick}>
              Without Flyweight
            </button>
          </div>

          <div>
            {withFlyweight && <p>{withFlyweight}</p>}
            {withNoFlyweight && <p>{withNoFlyweight}</p>}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1>Proxy Pattern Demo</h1>
          <p>Creating 100,000 books with 20KB content each</p>

          <div>
            <button onClick={handleProxyClick} className="button">
              With Proxy
            </button>
            <br />
            <br />
            <button className="button" onClick={handleNoProxyClick}>
              Without Proxy
            </button>
          </div>

          <div>
            {withProxy && <p>{withProxy}</p>}
            {withNoProxy && <p>{withNoProxy}</p>}
          </div>
        </div>
      )}
    </>
  );
};
