
import { useState } from 'react';
import './App.css';
import ToDoForm from './component/ToDoForm/ToDoForm';
import ToDoList from './component/ToDoList/ToDoList';

function App() {
  const [list, setList] = useState([]); //list = danh sách các task đc đc add
  function addTask(input) {
    if (!input) {alert('Input your task pls!')}  //nếu input rỗng -> alert
    else {
      let newList = [...list];  //duplicate list và push giá trị mới đc thêm
      newList.push(input);
      setList(newList); // cập nhật lại list = list mới
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
    // console.log(list);
  };
  return (
    <div className='app-container'>
      <ToDoForm handleInput={addTask}></ToDoForm>
      <ToDoList list={list} remove={handleRemove} update={handleUpdate}></ToDoList>
    </div>
  );
}

export default App;
