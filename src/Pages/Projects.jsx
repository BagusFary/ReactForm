import Header from "./Header";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-200 h-screen">
        <div className="flex justify-center">
          <h1 className="text-3xl text-gray-900 dark:text-white mt-2">
            Frontend Projects
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          <Button gradientMonochrome="lime" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button
            gradientMonochrome="lime"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
          <Button
            gradientMonochrome="lime"
            onClick={() => navigate("/formulir")}
          >
            Formulir 1
          </Button>
          <Button
            gradientMonochrome="lime"
            onClick={() => navigate("/formulir2")}
          >
            Formulir 2
          </Button>
          <Button
            gradientMonochrome="lime"
            onClick={() => navigate("/todolist")}
          >
            Todolist
          </Button>
        </div>
      </div>
    </>
  );
}
