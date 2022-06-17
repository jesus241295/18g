import { useState, useEffect } from "react";
import "./App.css";

// components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  // estado local del componente
  const [itemActive, setIsActive] = useState(null);

  const isActive = (itemNumber) => itemNumber === itemActive;

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li
            onClick={() => setIsActive(1)}
            className={`${isActive(1) ? "active" : "inactive"}`}
          >
            Parrafo 1
          </li>
          <li
            onClick={() => setIsActive(2)}
            className={`${isActive(2) ? "active" : "inactive"}`}
          >
            Parrafo 2
          </li>
          <li
            onClick={() => setIsActive(3)}
            className={`${isActive(3) ? "active" : "inactive"}`}
          >
            Parrafo 3
          </li>
          <li
            onClick={() => setIsActive(4)}
            className={`${isActive(4) ? "active" : "inactive"}`}
          >
            Parrafo 4
          </li>
          <li
            onClick={() => setIsActive(5)}
            className={`${isActive(5) ? "active" : "inactive"}`}
          >
            Parrafo 5
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
