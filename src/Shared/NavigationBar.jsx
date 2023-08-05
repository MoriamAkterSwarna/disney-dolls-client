import React, { useContext, useState } from "react";
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/logo.png";
import useTitle from "../hooks/useTitle";

const NavigationBar = () => {
  useTitle("Home");
  const { user, logOut, userDetails } = useContext(AuthContext);

  console.log(user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-100 flex mr-0 justify-between items-center mt-0 rounded sm:max-w-xl md:max-w-full md:px-24 lg:px-6 lg:py-4">
        <Link to="/" className="inline-flex items-center relative navbar-start">
          <>
            <img className="w-[60px] rounded-full" src={logo} alt="" />
          </>
        </Link>

        {/* nav item */}
        <ul className="lg:flex space-x-8 items-center font-bold hidden navbar-center">
          <li>
            <NavLink
              to="/"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allToys"
              title="All Toys"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Blog
            </NavLink>
          </li>
          {user && (
            <><li>
            <NavLink
              to="/addToy"
              className={({ isActive }) =>
                isActive ? "active" : "default"
              }>
              Add A Toy
            </NavLink>
            
          </li>
          <NavLink
          to="/myToy"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          My Toy
        </NavLink></>
          )}
        </ul>
        <div className="nav-end font-bold flex items-center">
          <span>
            {user && (
              <img
                src={user?.photoURL}
                title={user?.displayName}
                className="rounded-full w-24 mr-2"
                alt=""
              />
            )}
          </span>

          {user ? (
            <Link className="btn btn-primary" onClick={logOut}>
              Sign out
            </Link>
          ) : (
            <>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary" to="/register">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile nav menu  */}

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}>
            <HiBars3CenterLeft className="w-5 text-gray-600" />
          </button>

          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <>
                        <img
                          className="w-[50px] rounded-full"
                          src={logo}
                          alt=""
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Disney Magic Toys
                        </span>
                      </>
                    </Link>
                  </div>

                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}>
                      <HiOutlineXMark className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        title="Home"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/allToys"
                        title="All Toys"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }>
                        All Toys
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive
                            ? "active font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                            : "default font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        }>
                        Blog
                      </NavLink>
                    </li>

                    {user && (
                      <li>
                        <NavLink
                          to="/addToy"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }>
                          Add A Toy
                        </NavLink>
                        <NavLink
                          to="/myToy"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }>
                          My Toy
                        </NavLink>
                      </li>
                    )}
                  </ul>
                  <div className="font-bold flex flex-col">
                    <span>
                      <img className="rounded-full w-1/2" alt="" />
                    </span>

                    <img
                      src={user?.photoURL ? user.photoURL : ""}
                      title={user?.displayName}
                      className="rounded-full w-1/2"
                      alt=""
                    />
                    {user ? (
                      <Link
                        className="btn btn-primary w-1/3 mt-2"
                        onClick={logOut}>
                        Sign out
                      </Link>
                    ) : (
                      <Link className="btn btn-primary w-1/3 mt-2" to="login">
                        Login
                      </Link>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
