import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";


const Landing = lazy(() => import('./Pages/Landing'))
const Login = lazy(() => import('./Pages/Login'))
const Register = lazy(() => import('./Pages/CreateAccount'))
const Projects = lazy(() => import('./Pages/Projects'))

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing/>
    },
    {
      path: '/projects',
      element: <Projects/>
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path:'/register',
      element: <Register/>
    }
  ])
  return (
    <>
      <Suspense fallback={<h1>LOADING BANG MESSI</h1>}>
        <RouterProvider router={router}/>
      </Suspense>
    </>

    
  );
}

export default App;
