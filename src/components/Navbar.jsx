import { NavLink } from "react-router-dom";
import userImg from '../assets/images/user.png'

const Navbar = () => {
    const Links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
        <li><NavLink to={'/user-profile'}>User Profile</NavLink></li>
    </>
  return (
    <div className=" bg-primary/40">
      <div className="navbar container">
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
                {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-burnt-orange">Eco- <span className="!text-green-500">adventure</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {Links}
          </ul>
        </div>
        <div className="navbar-end">
            <img className="h-8 w-8 md:w-10 md:h-10 mr-3" src={userImg} alt="Uger img" />
          <a className="btn bg-orange-400 hover:bg-orange-500 text-white px-6 py-2">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
