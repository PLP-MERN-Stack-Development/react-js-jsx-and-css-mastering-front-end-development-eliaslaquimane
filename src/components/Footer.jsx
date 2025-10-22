import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-white">Task Manager</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
          <li>
            <Link to={"/"} className="hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/Manage"} className="hover:text-white transition-colors">
              Manager
            </Link>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
