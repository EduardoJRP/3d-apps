import './App.css';
import { useState } from "react";
import {planets, age, isGreen, Task} from './sections/Functions';
import {Components} from './sections/components'
import { TernaryLists } from './sections/ternary-lists';


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
      completed: false,
    }
    setTodoList([...todoList, task]);
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };



  return (
    <div className="App">
      <Components />
      <TernaryLists />

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
                completed = {task.completed}
                deleteTask={deleteTask} 
                completeTask={completeTask}
              />
            )})}
        </div>
      </div>
    </div>
  );
}

export default App;
