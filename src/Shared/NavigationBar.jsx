import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import logo from '../assets/logo.png'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-100 flex justify-between items-center mt-0 p-5 rounded sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8">
        <Link
          to="/home"
          className="inline-flex items-center relative navbar-start"
        >
          <>
          <img className="w-[50px] rounded-full" src={logo} alt="" />
          <span className="title-text ml-2 text-2xl font-bold tracking-wide text-gray-800">
            Disney Magic Toys
          </span></>
        </Link>

        {/* nav item */}
        <ul className="lg:flex space-x-8 items-center font-bold hidden navbar-center">
          <li>
            <NavLink
              to="/home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="nav-end font-bold flex items-center">
          <span>{<img className="rounded-full w-[60px]" alt="" />}</span>

          {/* <Link className='btn btn-primary'>Sign out</Link> */}
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>

          <Link className="btn btn-primary" to="/register">
            Register
          </Link>
        </div>

        {/* Mobile nav menu  */}

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
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
                    <img className="w-[50px] rounded-full" src={logo} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Disney Magic Toys
                      </span></>
                    </Link>
                  </div>

                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HiOutlineXMark className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/home"
                        title="Home"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive
                            ? "active font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                            : "default font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>

                    <li></li>
                  </ul>
                  <div className="font-bold flex flex-col">
                    <span>
                      <img className="rounded-full w-1/2" alt="" />
                    </span>

                    {/* <Link className='btn btn-primary w-1/3 mt-2' >Sign out</Link>  */}
                    <Link className="btn btn-primary w-1/3 mt-2" to="login">
                      Login
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default NavigationBar;
