import { useState } from "react";
import useAuth from "@/src/Hooks/useAuth/useAuth";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);


  return (
    <div className="bg-gray-100 py-8">
      <Helmet>
        <title>My Profile</title>
      </Helmet>
        <h2 className="text-4xl font-bold text-center py-4 cinzel-font">My Profile</h2>

      <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || ""}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-gray-300 object-cover mb-4"
          />
          <label
            htmlFor="profile-pic"
            className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Update Profile Picture
          </label>
          <input
            type="file"
            id="profile-pic"
            accept="image/*"
            //   onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* User Information */}
        <div className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Update Button */}
        <button
          // onClick={handleUpdateProfile}
          className={`w-full mt-6 bg-[#333] text-white py-2 rounded-lg transition-all hover:bg-[#222121] hover:text-white ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
