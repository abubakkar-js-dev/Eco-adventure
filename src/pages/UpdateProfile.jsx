import { useContext } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  useDocumentTitle();
  const { user } = useContext(AuthContext);
  return (
    <div className="flex  justify-center items-center min-h-[calc(100vh-68px)] container">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl border relative">
        <img className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 w-24 rounded-full mx-auto ring-2  ring-primary" src={user.photoURL} alt="user photo" />
        <h2 className="text-center text-2xl font-semibold mt-16">{user.displayName}</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter you name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />

          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white">Update Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
