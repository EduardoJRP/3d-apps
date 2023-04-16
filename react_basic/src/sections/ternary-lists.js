import {planets, age, isGreen} from './Functions';

export const TernaryLists = () => {
  return(
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
  );
};