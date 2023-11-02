import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
// import CreateAccount from '.Pages/CreateAccount'
import { lazy } from "react";

const Login = lazy(() => import('./Pages/Login'))
const Register = lazy(() => import('./Pages/CreateAccount'))

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>,
    },
    {
      path:'/register',
      element: <Register/>
    }
  ])
  return (
    
      <Suspense fallback={<h1>LOADING BANG MESSI</h1>}>
        <RouterProvider router={router}/>
      </Suspense>
    

    
  );
}

export default App;
