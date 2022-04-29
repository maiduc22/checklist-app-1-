import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginForm from "./container/LoginForm";
import CheckList from "./container/CheckListApp";
import InputCustom from "./core/Input";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<InputCustom 
        icon={<i class="fa fa-user" aria-hidden="true" />}
        size="large"
        placeholder='test'/>}></Route>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/checklist" element={<CheckList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App