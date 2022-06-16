import { useState, useEffect } from "react";
import "./App.css";

// components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  // estado local del componente
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  // useEffect(() => {
  //   console.log("USE_EFFECT");
  // }, []);
  // useEffect(() => {
  //   console.log("ESE_EFFECT");
  // });

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };
  const isMultiple = count % 5 === 0 && count !== 0 ? true : false;
  const counType = isMultiple ? "Es multiplo" : "no es multiple";
  const countClass = isMultiple ? "active" : "inactive";
  return (
    <div className="App">
      <header className="App-header">
        <Title text="chucho"></Title>
        <FullName fisrtName="Jesus" lastName="Gonzalez"></FullName>
        <p className={countClass}>
          Counter: {count}, {counType}
        </p>
        <button onClick={() => handleClick(true)}>Increase</button>
        <div className={`square ${isOn ? "square-on" : "square-off"} `}>
          {isOn ? "ON" : "OFF"}
        </div>
        <button onClick={() => setIsOn(true)}>On</button>
        <button onClick={() => setIsOn(false)}>OFF</button>
      </header>
    </div>
  );
}

export default App;
