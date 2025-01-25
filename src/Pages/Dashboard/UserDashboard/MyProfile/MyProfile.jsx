import useAxiosPublic from "@/src/Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import useUsers from "@/src/Hooks/useUsers/useUsers";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {
  const [users] = useUsers()
  console.log(users)
const [loading,setLoading] = useState(false)
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    // Handle image upload if a new file is selected
    let imageUrl = users?.photo; // Default to current image if no new image is uploaded
    if (data.image?.[0]) {
      const imageFile = { image: data.image[0] };

      try {
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // Get the uploaded image URL
        imageUrl = res.data.data.display_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        setLoading(false);
        toast.error("Error uploading image");
        return;
      }
    }

    try {
      // Update user profile with the new image URL and other details
      const response = await axiosSecure.patch(`/users/${users._id}`, {
        name: data.name || users?.name,
        photo: imageUrl,
      });

      // Reset form with updated values
      reset({
        name: response.data.name,
        image: null,
      });

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile");
    }

    setLoading(false);
  };



  return (
    <div className="bg-gray-100 py-8">
      <Helmet>
        <title>My Profile | Dashboard</title>
      </Helmet>
        <h2 className="text-4xl font-bold text-center py-4 cinzel-font">My Profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img
            src={users?.photo || ""}
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
            {...register("image")}
            className="hidden"
          />
        </div>

        {/* User Information */}
        <div className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              // value={users.name}
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-lg bg-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={users?.email || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Update Button */}
        <button
          // onClick={handleUpdateProfile}
          className="w-full mt-6 bg-[#333] text-white py-2 rounded-lg transition-all hover:bg-[#222121] hover:text-white"
          
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
