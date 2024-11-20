import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useDocumentTitle from "../hooks/useDocumentTitle";

const MyProfile = () => {
  useDocumentTitle();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  return (
    <div className="container min-h-[calc(100vh-68px)]">
      <div className="flex flex-col bg-gradient-to-b from-gray-50 to-orange-50/40 p-6 rounded-b-lg  border  max-w-screen-sm w-full mx-auto mb-12 md:mb-16 lg:mb-[100px]">
        <div className="avatar mb-5">
          <div className="ring-primary ring-2 ring-offset-2  ring-offset-base-100 w-20 md:w-24 rounded-full">
            <img src={user.photoURL} alt={`${user.displayName}'s Profile`} />
          </div>
        </div>
        <div>
          <h3 className="uppercase text-orange-500">Hey There,</h3>
          <h2 className="text-2xl font-bold mb-4">
            I am, {user.displayName || "User"}!
          </h2>
        </div>
        <div className="text-left w-full">
          <p className="text-lg mb-2">
            <strong>Name:</strong> {user.displayName || "Not provided"}
          </p>
          <p className="text-lg  mb-2">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <button
          onClick={() => navigate("/update-profile")}
          className="mt-4 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-600 transition justify-start flex-grow-0"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
