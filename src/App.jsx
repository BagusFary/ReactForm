import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";
import Formulir from "./Pages/Formulir";
import FormulirPerpus from "./Pages/FormulirPerpus";
import Todolist from "./Pages/Todolist";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<CreateAccount/>}/>
        <Route path="/formulir" element={<Formulir/>}/>
        <Route path="/formulirperpus" element={<FormulirPerpus/>}/>
        <Route path="/todolist" element={<Todolist/>}/>
      </Routes>
    </Router>
  );
}

export default App;
