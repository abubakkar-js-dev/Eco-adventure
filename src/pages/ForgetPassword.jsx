import { useLocation } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useState } from "react";

const ForgetPassword = () => {
    useDocumentTitle();
    const location = useLocation();
    // const [email,setEmail] = location.state;
    const prevEmail = location?.state || '';
    const [email,setEmail] = useState(prevEmail);
    console.log(prevEmail);

    const handleResetPassword = () =>{
        window.open('https://mail.google.com','_blank');
    }

    return (
        <div className="min-h-[calc(100vh-68px)] flex flex-col justify-center items-center container">
        <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Reset Your Password
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleResetPassword();
            }}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-orange-300 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>


    );
};

export default ForgetPassword;