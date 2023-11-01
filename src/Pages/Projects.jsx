import Header from "./Header";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex justify-center mt-4">
        <h1 className="text-3xl text-gray-900 dark:text-white">
          Frontend Projects
        </h1>
      </div>
      <div className="flex flex-wrap gap-1 justify-center mt-3">
      <Button gradientMonochrome="cyan" onClick={() => navigate("/login")}>Login</Button>
      <Button gradientMonochrome="cyan" onClick={() => navigate("/register")}>Register</Button>
      <Button gradientMonochrome="cyan" onClick={() => navigate("/formulir")}>Formulir 1</Button>
      <Button gradientMonochrome="cyan" onClick={() => navigate("/formulir2")}>Formulir 2</Button>
      <Button gradientMonochrome="cyan" onClick={() => navigate("/todolist")}>Todolist</Button>
      </div>
    </>
  );
}
