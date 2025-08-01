import { useState } from "react";
import PerformancePatterns from "./pages/patterns/PerformancePatterns";
import GraphqlDemo from "./pages/graph/GraphqlDemo";

export const App = () => {
  const [current, setCurrent] = useState<"patterns" | "graphqlDemo">(
    "patterns"
  );
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button
          onClick={() => setCurrent("patterns")}
          className="button"
          style={{ backgroundColor: "gray" }}
        >
          Patterns
        </button>
        <button
          onClick={() => setCurrent("graphqlDemo")}
          className="button"
          style={{ backgroundColor: "gray" }}
        >
          GraphQL Demo
        </button>
      </nav>
      <div style={{ padding: "2rem" }}>
        {current === "patterns" && <PerformancePatterns />}
        {current === "graphqlDemo" && <GraphqlDemo />}
      </div>
    </>
  );
};
