import { useState } from "react";
import { generateWithoutFlyweight } from "../../utils/withoutFlyweight";
import { generateWithFlyweight } from "../../utils/withFlyweight";

export const FlyweightDemo = () => {
  const [withFlyweight, setWithFlyweight] = useState("");
  const [withNoFlyweight, setWithNoFlyweight] = useState("");

  return (
    <div>
      <p>Creating 100,000 books with 20KB content each</p>
      <br />
      <div style={{ display: "flex", gap: "1rem", alignItems: "left" }}>
        <button onClick={() => setWithNoFlyweight(generateWithoutFlyweight)}>
          No Flyweight
        </button>
        {withNoFlyweight && <p>{withNoFlyweight}</p>}
      </div>
      <br />
      <div style={{ display: "flex", gap: "1rem", alignItems: "left" }}>
        <button onClick={() => setWithFlyweight(generateWithFlyweight)}>
          Yes Flyweight
        </button>
        {withFlyweight && <p>{withFlyweight}</p>}
      </div>
    </div>
  );
};
