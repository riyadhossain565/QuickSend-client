import { useState } from "react";
import useAuth from "@/src/Hooks/useAuth/useAuth";
import { Helmet } from "react-helmet-async";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { updateProfile } from "firebase/auth";
// import { storage } from "@/firebase"; // Import your Firebase storage config

const MyProfile = () => {
  const { user } = useAuth();
  //   const [image, setImage] = useState(null);
  //   const [previewImage, setPreviewImage] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  // Handle Image Upload
  //   const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       setImage(file);
  //       setPreviewImage(URL.createObjectURL(file));
  //     }
  //   };

  // Handle Update Profile Picture
  //   const handleUpdateProfile = async () => {
  //     if (!image) return alert("Please select an image to upload!");

  //     setLoading(true);

  //     // Firebase Storage Reference
  //     const storageRef = ref(storage, `profile_pictures/${user.uid}`);
  //     const uploadTask = uploadBytesResumable(storageRef, image);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         // Optional: Handle progress
  //       },
  //       (error) => {
  //         console.error("Error uploading file:", error);
  //         setLoading(false);
  //       },
  //       async () => {
  //         // Get Download URL after successful upload
  //         const photoURL = await getDownloadURL(uploadTask.snapshot.ref);

  //         // Update Firebase Auth Profile
  //         await updateProfile(user, { photoURL });

  //         alert("Profile picture updated successfully!");
  //         setLoading(false);
  //       }
  //     );
  //   };

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
            Upload Profile Picture
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
