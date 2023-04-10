import './App.css';
import { useState } from "react";
import {Job, planets, age, isGreen, Task} from './Functions';


function App() {
  {/* States */}
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  {/* Functions */}
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  const handleChange = (event) => {
    setNewTask(event.target.value)
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
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

      <div className="States">
        <h1> States, useState Hook</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={setToZero}>Set to Zero</button>
        {count}
      </div>

      <div className="CRUD">
        <h1> CRUD in React </h1>
        <div className='addTask'>
          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map((task) => {
            return (
              <Task 
                taskName={task.taskName} 
                id={task.id} 
                deleteTask={deleteTask} 
              />
            )})}
        </div>
      </div>
    </div>
  );
}

export default App;
