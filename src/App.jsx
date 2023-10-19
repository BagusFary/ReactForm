import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Form/Login";
import CreateAccount from "./Form/CreateAccount";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<CreateAccount/>}/>
      </Routes>
    </Router>
  );
}

export default App;
