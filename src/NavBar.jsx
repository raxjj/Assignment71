import React from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

export default function NavBar({ photo, productCount = 0 }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-10 py-5 shadow">
      <Link to="/">
        <img src={photo} alt="Amazon Logo" className="h-20" />
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/login">
          <button className="hover:text-blue-600 hover:font-bold px-2 py-1 rounded-md text-purple-600">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="hover:text-purple-600 hover:font-bold px-2 py-1 rounded-md text-blue-600">
            Signup
          </button>
        </Link>
        <Link to="/cart" className="flex items-center space-x-2">
          <FaCartArrowDown />
        </Link>
      </div>
    </div>
  );
}
