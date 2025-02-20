import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logout Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation Campaigns</NavLink>
      </li>
      <li>
        <NavLink to="/help">How to Help</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>

      {/*       {user && (
        <li>
          <NavLink to="/donate">Donate</NavLink>
        </li>
      )} */}
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Winter Clothing Donation</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <button onClick={handleLogout} className="btn">
            LogOut
          </button>
        ) : (
          <button className="btn">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
