import { Link, NavLink } from "react-router-dom";
import userImg from "../assets/images/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user,logOutUser} = useContext(AuthContext);
  const Links = (
    <>
      <li>
        <NavLink className="text-black" to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className="text-black" to={"/update-profile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink className="text-black" to={"/user-profile"}>My Profile</NavLink>
      </li>
    </>
  );

  const handleLogOut = () =>{
    logOutUser()
    .then(() =>{
      console.log('sign out succesfully');
    })
    .catch(err =>{
      const errorMessage = err.message;
      console.log(errorMessage);
    })
  }
  return (
    <div className="sticky top-0 z-20 bg-cyan-500 backdrop-filter backdrop-blur-lg bg-opacity-30">
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
          <a className="btn btn-ghost text-xl text-burnt-orange">
            Eco- <span className="!text-cyan-500">adventure</span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          {
            user && user?.email ? (
              <img
              className="h-8 w-8 md:w-10 md:h-10 mr-3 rounded-full ring-1 ring-orange-400 ring-offset-1"
              src={user.photoURL || userImg}
              alt="Uger img"
            />
            ) : (
              <img
              className="h-8 w-8 md:w-10 md:h-10 mr-3 "
              src={userImg}
              alt="Uger img"
            />
            )
          }
          {user && user?.email ? (
            <button onClick={handleLogOut} className="btn bg-orange-400 hover:bg-orange-500 text-white px-6 py-2">
              Log Out
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn bg-orange-300 hover:bg-orange-500 text-white px-6 py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
