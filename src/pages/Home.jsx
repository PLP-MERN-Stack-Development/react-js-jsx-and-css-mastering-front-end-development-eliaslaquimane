import React from "react";
import Button from "./../components/Button"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 p-2">Task Manager</h1>
      <p className="text-lg text-gray-600">
        Welcome to the Task Manager
      </p>
      <Button >
        <Link to={"/Manage"}>Go to Manager</Link>
      </Button>
    </div>
  );
}

export default Home;
