
import { useState } from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm/ToDoForm';
import ToDoList from './component/ToDoList/ToDoList';

function App() {
  const [list, setList] = useState([]);
  function addTask(task) {
    if (!task) {alert('Input your task pls!')}
    else {
      let newList = [...list];
      newList.push(task);
      setList(newList);
    }   
  }
  function handleRemove(id){
    let newList = [...list];
    newList.splice(id, 1);
    setList(newList);
    // console.log(newList);
  }
  function handleUpdate(editted, id){
    let newlist = [...list];
    newlist[id] = editted;
    setList(newlist);
    console.log(list);
  };
  return (
    <div className='app-container'>
      <ToDoForm handleInput={addTask}></ToDoForm>
      <ToDoList list={list} remove={handleRemove} update={handleUpdate}></ToDoList>
    </div>
  );
}

export default App;
