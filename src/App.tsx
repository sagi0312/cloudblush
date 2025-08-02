import { useState } from "react";
import GraphqlDemo from "./pages/graph/GraphqlDemo";
import "./App.css";
import { FlyweightDemo } from "./pages/patterns/FlyweightDemo";
import { ProxyDemo } from "./pages/patterns/ProxyDemo";

export const App = () => {
  const [current, setCurrent] = useState("patterns");
  const [patternsExpanded, setPatternsExpanded] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);

  const handlePatternsClick = () => {
    setCurrent("patterns");
    setPatternsExpanded(!patternsExpanded);
    if (!patternsExpanded) {
      setSelectedPattern(null);
    }
  };

  const handlePatternSelect = (pattern: string) => {
    setSelectedPattern(pattern);
    setCurrent("patterns");
  };

  const handleGraphQLClick = () => {
    setCurrent("graphqlDemo");
    setPatternsExpanded(false);
    setSelectedPattern(null);
  };

  const renderContent = () => {
    if (current === "graphqlDemo") {
      return <GraphqlDemo />;
    }

    if (current === "patterns") {
      if (selectedPattern === "flyweight") {
        return <FlyweightDemo />;
      }
      if (selectedPattern === "proxy") {
        return <ProxyDemo />;
      }
      return <h1>Pick A Pattern</h1>;
    }
  };

  const getBreadcrumb = () => {
    if (current === "graphqlDemo") return "GraphQL Demo";
    if (current === "patterns" && selectedPattern) {
      return `Patterns > ${
        selectedPattern.charAt(0).toUpperCase() + selectedPattern.slice(1)
      }`;
    }
    return "Patterns";
  };

  return (
    <>
      <nav className="nav-container">
        <div className="nav-buttons">
          <div className="dropdown-container">
            <button
              onClick={handlePatternsClick}
              className={`nav-button ${current === "patterns" ? "active" : ""}`}
            >
              Patterns {patternsExpanded ? "▼" : "▶"}
            </button>

            {patternsExpanded && (
              <div className="dropdown-menu">
                <button
                  onClick={() => handlePatternSelect("flyweight")}
                  className={`dropdown-item ${
                    selectedPattern === "flyweight" ? "selected" : ""
                  }`}
                >
                  Flyweight
                </button>
                <button
                  onClick={() => handlePatternSelect("proxy")}
                  className={`dropdown-item ${
                    selectedPattern === "proxy" ? "selected" : ""
                  }`}
                >
                  Proxy
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleGraphQLClick}
            className={`nav-button ${
              current === "graphqlDemo" ? "active" : ""
            }`}
          >
            GraphQL Demo
          </button>
        </div>

        <div className="breadcrumb">{getBreadcrumb()}</div>
      </nav>

      <div className="content-container">{renderContent()}</div>
    </>
  );
};
