import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { Auth } from "../../Contexts/AuthContext";

const Navbar = () => {
  const { LogOut, user } = useContext(Auth);
  const  navigate = useNavigate()

  const handelLogOut = (e) => {
    LogOut()
      .then(() => {
         
    
      })
      .catch((error) => {
        console.log(error.name);
      });
  };
  return (
    <div className="navbar  color text-white">
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
            className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/blog">Message</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
            <li>
              <Link to="/notification">About us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl italic">
          Follow Media
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="/blog">Message</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/notification">About us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <button>
          <div className="indicator mr-3 ">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/vBZ9sZy/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-950 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {user?.email ? (
              <li>
                <button onClick={handelLogOut}>SignOut</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
