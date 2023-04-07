import './App.css';
import {Job} from './Job';
import {planets} from './Planets';

function App() {

  return (
    <div className="App">
      <div className="Components">
        <h1> Components, JSX, props Examples</h1>
        <Job salary={90000} position="Senior SDE" company="Amazon"/>
        <Job salary={12000} position="Junior SDE" company="Google"/>
        <Job salary={10000} position="Project Manager" company="Netflix"/>
      </div>

      <div className="Ternary">
        <h1> Ternary Operators, Lists, CSS Examples</h1>
        {planets.map(
          (planet, key) => (planet.isGasPlanet && <h6> {planet.name} </h6>)
        )}
      </div>

      <div className="States">
        
      </div>
    </div>
  );
}

export default App;
