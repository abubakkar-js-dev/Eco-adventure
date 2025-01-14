import { Link, useNavigate } from "react-router-dom";
import registerSvg from "../assets/svg/sign_up.svg";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Register = () => {
  useDocumentTitle();
  const { createNewUser, updateUserProfile, setUser, loginWithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const [error,setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photo.value;
    const password = form.password.value;

    const validatePassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if(!validatePassword.test(password)){
      setError({...error,regis: 'Password must be an uppercase, a lowercase and at least 6 character.'});
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
        // update profile
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            const errorMessage = err.message;
            setError({...error,regis: errorMessage});
          });
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError({...error,regis: errorMessage});
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError({...error,regis: errorMessage});
      });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-0 min-h-[calc(100vh-68px)] bg-gradient-to-r from-orange-50 to-cyan-100 p-6">
      {/* Image Section */}
      <div className="flex justify-center lg:w-1/2 mb-10 lg:mb-0">
        <img
          className="max-h-[500px] w-auto"
          src={registerSvg}
          alt="Login Illustration"
        />
      </div>

      {/* Login Form Section */}
      <div className="bg-gray-50 shadow-lg rounded-lg p-8 lg:w-1/3 w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create An Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* email input */}
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
          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          {/* password input */}
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
          </div>
          {
            error.regis && <label className="label text-xs text-red-500">{error.regis}</label>
          }
          <div className="form-control mt-6">
            <button className="btn  w-full text-white bg-orange-400 hover:bg-orange-500">
              Register
            </button>
          </div>
          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="mx-auto btn btn-outline flex items-center gap-2 text-gray-600 hover:text-gray-700 border-gray-300 hover:bg-gray-100"
          >
            <FaGoogle className="text-red-500" />
            Login with Google
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="link text-orange-400 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
