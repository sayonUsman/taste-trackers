import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/ContextProvider";

const Navbar = () => {
  const { user, logOut, loggedInUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const userDetails = loggedInUser();

  const handleLogOut = () => {
    setMessage("");
    setErrorMessage("");

    logOut()
      .than(() => {
        setMessage("Successfully logOut");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div>
      <div className="relative z-10">
        <div className="fixed top-0 left-0 right-0 bg-white">
          <div className="container mx-auto rounded-md navbar shadow-lg shadow-zinc-800 mb-5">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow-md shadow-zinc-800 bg-base-100 rounded-md w-52"
                >
                  <li>
                    <NavLink to="/" className="btn-ghost mb-1">
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/about" className="btn-ghost mb-1">
                      About
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/contact" className="btn-ghost mb-1">
                      Contact
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/services" className="btn-ghost mb-1">
                      Services
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/blog" className="btn-ghost mr-2">
                      Blog
                    </NavLink>
                  </li>

                  {user ? (
                    <li>
                      <NavLink
                        to="/login"
                        onClick={handleLogOut}
                        className="btn-ghost"
                      >
                        Log Out
                      </NavLink>
                    </li>
                  ) : (
                    <li>
                      <NavLink to="/login" className="btn-ghost">
                        Login
                      </NavLink>
                    </li>
                  )}
                </ul>
              </div>

              <a className="btn btn-ghost normal-case text-xl">
                Taste Trackers
              </a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <NavLink to="/" className="btn-ghost mr-2">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="btn-ghost mr-2">
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className="btn-ghost mr-2">
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/services" className="btn-ghost mr-2">
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/blog" className="btn-ghost mr-2">
                    Blog
                  </NavLink>
                </li>

                {user ? (
                  <li>
                    <NavLink
                      to="/login"
                      onClick={handleLogOut}
                      className="btn-ghost"
                    >
                      Log Out
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/login" className="btn-ghost">
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>

            <div className="navbar-end">
              <div className="dropdown dropdown-end mr-3 md:mr-4">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </label>

                <div
                  tabIndex={0}
                  className="mt-3 card rounded-md card-compact dropdown-content w-52 bg-base-100 shadow-md shadow-zinc-800 "
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">0 Items</span>
                    <span className="text-info">Subtotal: $00</span>

                    <div className="card-actions">
                      <button className="btn rounded-md btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {user && (
                <div className="dropdown dropdown-end mr-3 md:mr-4">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          userDetails[2]
                            ? userDetails[2]
                            : "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80} "
                        }
                      />
                    </div>
                  </label>

                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow-md shadow-zinc-800 bg-base-100 rounded-md w-52"
                  >
                    <li>
                      <NavLink
                        to="/profile"
                        className="justify-between btn-ghost mb-1 pr-1"
                      >
                        {userDetails[0] ? userDetails[0] : userDetails[1]}
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/settings" className="btn-ghost mb-1">
                        Settings
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/login"
                        onClick={handleLogOut}
                        className="btn-ghost"
                      >
                        Log Out
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
