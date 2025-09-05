import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-png.png";
import { useState } from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?query=${queryTerm}`);
  };

  const active =
    "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActive =
    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Cinemate
          </span>
        </NavLink>

        <div className="flex md:hidden items-center">
          <button
            onClick={() => setHidden(!hidden)}
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            hidden ? "hidden" : "block"
          } w-full md:flex md:items-center md:w-auto md:order-1`}
        >
          <form
            onSubmit={handleSubmit}
            className="relative mt-3 md:mt-0 md:mr-4 w-full md:w-auto"
          >
            <input
              type="text"
              name="search"
              className="block w-full md:w-64 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7 7 0 1110 3a7 7 0 016.65 10.65z"
                />
              </svg>
            </div>
          </form>

          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium border md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent p-4 md:p-0">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? active : inActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/popular"
                className={({ isActive }) => (isActive ? active : inActive)}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/top"
                className={({ isActive }) => (isActive ? active : inActive)}
              >
                Top Rated
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies/upcoming"
                className={({ isActive }) => (isActive ? active : inActive)}
              >
                Up Coming
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
