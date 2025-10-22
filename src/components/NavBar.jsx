import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 top-0 w-full">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link 
            to="/" 
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/Manage" 
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Manager
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
