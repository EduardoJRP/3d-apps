import './App.css';
import { useState } from "react";
import {Job, planets, age, isGreen} from './Job';


function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="Components">
        <h1> Components, JSX, props Examples</h1>
        <Job salary={90000} position="Senior SDE" company="Amazon"/>
        <Job salary={12000} position="Junior SDE" company="Google"/>
        <Job salary={10000} position="Project Manager" company="Netflix"/>
      </div>

      <div className="Ternary-Lists">
        <h1> Ternary Operators, Lists, CSS Examples</h1>
        <div className="Lists">
          {planets.map(
            (planet, key) => (planet.isGasPlanet && <h6> {planet.name} </h6>)
          )}
        </div>
        <div className="Ternary">
          {age >= 18 ? <h6> OVER AGE </h6> : <h6> UNDER AGE </h6>}
          {/* 
            CSS is different on JSX files
            ? : "if-else statements" && "if statements"
          */}
          <h6 style={{color: isGreen ? "green" : "red", backgroundColor: "gray"}}> THIS HAS COLOR </h6>
        </div>
      </div>

      <div class="States">
        <h1> States, useState Hook</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={setToZero}>Set to Zero</button>

        {count}
      </div>
    </div>
  );
}

export default App;
