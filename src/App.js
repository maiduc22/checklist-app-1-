
import { useState } from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm/ToDoForm';
import ToDoList from './component/ToDoList/ToDoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function handleRemove(id){
    let newarr = [...todos];
    newarr.slice(id, 1);
    setTodos(newarr);
  }
  return (
    <div className='app-container'>
      <div className='app-wrapper'>
        <div className='header'>
          <h1>Checklist App</h1>
        </div>
        <div>
          <ToDoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          ></ToDoForm>
        </div>
        <div>
          <ToDoList todos={todos} setTodos={setTodos} remove={handleRemove}></ToDoList>
        </div>
      </div>

    </div>
  )
}

export default App;
