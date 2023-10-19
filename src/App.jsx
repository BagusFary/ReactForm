import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Registration from "./Form/Registration";
import CreateAccount from "./Form/CreateAccount";

function App() {
  return (
    <>
      <Registration></Registration>
      <CreateAccount></CreateAccount>
    </>
  );
}

export default App;
