import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginForm from "./container/LoginForm";
import CheckList from "./container/CheckListApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/checklist" element={<CheckList />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App