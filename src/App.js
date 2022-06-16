import { useState } from "react";
import "./App.css";

// components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  // estado local del componente
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Title text="chucho"></Title>

        <FullName fisrtName="Jesus" lastName="Gonzalez"></FullName>

        <p>Counter {count}</p>
        <button onClick={() => setCount(count + 1)}>Incremento</button>

        <button onClick={() => setCount(count - 1)}>Decremento</button>
      </header>
    </div>
  );
}

export default App;
