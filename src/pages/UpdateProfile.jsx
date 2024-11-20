import { useContext, useRef } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  useDocumentTitle();
  const { user,setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const nameRef = useRef();
  const photoRef = useRef();

  const handleUpdate = () => {
    console.log("Hello");
    const name = nameRef.current.value;
    const photoURL = photoRef.current.value;
    updateUserProfile({displayName: name, photoURL: photoURL})
    .then(() =>{
      // update in context
      setUser({...user,displayName: name, photoURL: photoURL});
      
      navigate('/my-profile');
    })
    .catch(err =>{
        const errorMessage = err.message;
        console.log(errorMessage);
    })
  };
  return (
    <div className="flex  justify-center items-center min-h-[calc(100vh-68px)] container">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl border relative">
        <img
          className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full object-cover mx-auto ring-2  ring-primary ring-offset-2"
          src={user.photoURL}
          alt="user photo"
        />
        <h2 className="text-center text-2xl font-semibold mt-16">
          {user.displayName}
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            ref={nameRef}
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
            ref={photoRef}
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleUpdate}
              className="btn bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
