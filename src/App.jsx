import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Form/Login";
import CreateAccount from "./Form/CreateAccount";
import Formulir from "./Form/Formulir";
import FormulirPerpus from "./Form/FormulirPerpus";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<CreateAccount/>}/>
        <Route path="/formulir" element={<Formulir/>}/>
        <Route path="/formulirperpus" element={<FormulirPerpus/>}/>
      </Routes>
    </Router>
  );
}

export default App;
