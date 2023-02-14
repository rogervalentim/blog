import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "../hooks/useUser";

import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 border-b border-b-[#e6ebf4] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black">
            Blog Roger
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu color="black" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex text-center" : " hidden")
            }
          >
            <ul className="flex flex-col lg:text-center lg:flex-row list-none ">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <span className="ml-2 text-sm text-gray-700">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  <span className="ml-2 text-sm text-gray-700">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-black hover:opacity-75"
                  to="/articles"
                >
                  <span className="ml-2 text-sm text-gray-700">Articles</span>
                </Link>
              </li>
            </ul>
            <ul className="lg:ml-auto">
              <li>
                {user ? (
                  <button
                    onClick={() => {
                      signOut(getAuth());
                    }}
                    className="bg-[#dc3545] hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
