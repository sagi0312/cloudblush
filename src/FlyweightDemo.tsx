import { useState } from "react";
import { generateWithFlyweight } from "./utils/withFlyweight";
import { generateWithoutFlyweight } from "./utils/withoutFlyweight";

export const FlyweightDemo = () => {
  const [withFlyweight, setWithFlyweight] = useState("");
  const [withNoFlyweight, setWithNoFlyweight] = useState("");

  return (
    <div>
      <p>Creating 100,000 books with 20KB content each</p>
      <br />
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          className="button"
          onClick={() => setWithNoFlyweight(generateWithoutFlyweight)}
        >
          No Flyweight
        </button>
        {withNoFlyweight && <p>{withNoFlyweight}</p>}
      </div>
      <br />
      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={() => setWithFlyweight(generateWithFlyweight)}
          className="button"
        >
          Yes Flyweight
        </button>
        {withFlyweight && <p>{withFlyweight}</p>}
      </div>
    </div>
  );
};
