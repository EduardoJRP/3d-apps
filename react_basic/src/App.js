import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Components">
        <h1> Components, JSX, props Examples</h1>
        <Job salary={90000} position="Senior SDE" company="Amazon"/>
        <Job salary={12000} position="Junior SDE" company="Google"/>
        <Job salary={10000} position="Project Manager" company="Netflix"/>
      </div>
    </div>
  );
}

const Job = (props) => {
  return(
    <div>
      <h6> {props.salary} </h6>
      <h6> {props.position} </h6>
      <h6> {props.company} </h6>
    </div>
  )
}

export default App;
