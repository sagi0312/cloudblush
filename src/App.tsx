import { useState } from "react";
import { generateWithFlyweight } from "./withFlyweight";
import { generateWithoutFlyweight } from "./withoutFlyweight";

export const App = () => {
  const [withFlyweight, setWithFlyweight] = useState("");
  const [withNoFlyweight, setWithNoFlyweight] = useState("");

  const handleFlyweightClick = () => {
    const result = generateWithFlyweight();
    setWithFlyweight(result);
  };

  const handleNoFlyweightClick = () => {
    const result = generateWithoutFlyweight();
    setWithNoFlyweight(result);
  };

  return (
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
  );
};
