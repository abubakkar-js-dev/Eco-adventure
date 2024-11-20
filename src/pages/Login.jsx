import { Link, useLocation, useNavigate } from "react-router-dom";
import loginSvg from "../assets/svg/login.svg";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Login = () => {
  useDocumentTitle();
  const { signInUser,loginWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errror,setError] = useState('');
  const location = useLocation();
  const fromPath = location.state || '/';

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        event.target.reset();
        navigate(fromPath);

      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogin = () =>{
    loginWithGoogle()
    .then(result =>{
        setUser(result.user);
        navigate(fromPath);
    })
    .catch(err =>{
        const errorMessage = err.message;
        setError(errorMessage);
    })
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-0 min-h-[calc(100vh-68px)] bg-gradient-to-r from-orange-50 to-cyan-100 p-6">
      {/* Image Section */}
      <div className="flex justify-center lg:w-1/2 mb-10 lg:mb-0">
        <img
          className="max-h-[500px] w-auto"
          src={loginSvg}
          alt="Login Illustration"
        />
      </div>

      {/* Login Form Section */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-8 lg:w-1/3 w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login Here
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/*  password input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <label className="label flex justify-end">
              <a
                href="#"
                className="label-text-alt link link-hover text-orange-500"
              >
                Forgot password?
              </a>
            </label>
          </div>
          {
            errror && <label className="label text-xs text-red-500">{errror}</label>
          }
          <div className="form-control mt-6">
            <button className="btn  w-full text-white bg-orange-400 hover:bg-orange-500">
              Login
            </button>
          </div>
          <div className="divider">OR</div>

          <button onClick={handleGoogleLogin} className="mx-auto btn btn-outline flex items-center gap-2 text-gray-600 hover:text-gray-700 border-gray-300 hover:bg-gray-100">
            <FaGoogle className="text-red-500" />
            Login with Google
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 ">
          Don&apos;t have an account?{" "}
          <Link
            to={"/auth/register"}
            className="link text-orange-400 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
