import useAuth from "@/src/Hooks/useAuth/useAuth";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import useUpdateParcel from "@/src/Hooks/useUpdateParcel/useUpdateParcel";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateParcel = () => {
  const { user } = useAuth();
  const [parcel] = useUpdateParcel();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const [price, setPrice] = useState(parcel?.price || 50);
  const navigate = useNavigate()

  // Handle price calculation based on parcel weight
  const handleWeightChange = (e) => {
    const weight = parseFloat(e.target.value) || 0;
    if (weight > 2) setPrice(150);
    else setPrice(weight * 50); // Price per kg (50Tk)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const phoneNumber = form.phoneNumber.value;
    const parcelType = form.parcelType.value;
    const parcelWeight = form.parcelWeight.value;
    const receiverName = form.receiverName.value;
    const receiverPhone = form.receiverPhone.value;
    const deliveryAddress = form.deliveryAddress.value;
    const deliveryDate = startDate;
    const latitude = form.latitude.value;
    const longitude = form.longitude.value;


    const updateBooking = {
      phoneNumber,
      parcelType,
      parcelWeight,
      receiverName,
      receiverPhone,
      deliveryAddress,
      deliveryDate,
      latitude,
      longitude,
      price
    };

    console.log(updateBooking);

    try {
      // 1. make a patch request
      await axiosSecure.patch(`/parcels/${parcel._id}`, updateBooking);
      // 2. Reset form
      form.reset();
      // 3. sweet alert
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Parcel Successfully Upadeted",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/dashboard/my-parcels')
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="p-5">
      <Helmet>
        <title>Update Parcel | Dashboard</title>
      </Helmet>
      <div className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center mb-6 cinzel-font">
          Update Parcel
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={user.displayName}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              defaultValue={parcel.phoneNumber}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Parcel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Parcel Type
            </label>
            <input
              type="text"
              name="parcelType"
              defaultValue={parcel.parcelType}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Parcel Weight */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Parcel Weight (kg)
            </label>
            <input
              type="number"
              name="parcelWeight"
              defaultValue={parcel.parcelWeight}
              onChange={handleWeightChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Receiver's Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Receiver's Name
            </label>
            <input
              type="text"
              name="receiverName"
              defaultValue={parcel.receiverName}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Receiver's Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Receiver's Phone
            </label>
            <input
              type="text"
              name="receiverPhone"
              defaultValue={parcel.receiverPhone}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Parcel Delivery Address
            </label>
            <textarea
              name="deliveryAddress"
              defaultValue={parcel.deliveryAddress}
              className="w-full px-4 py-2 border rounded-lg"
              required
            ></textarea>
          </div>

          {/* Requested Delivery Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Requested Delivery Date
            </label>
            {/* Date Picker Input Field */}
            <DatePicker
              className="border p-2 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              defaultValue={parcel.deliveryDate}
            />
          </div>

          {/* Delivery Latitude */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Delivery Address Latitude
            </label>
            <input
              type="text"
              name="latitude"
              defaultValue={parcel.latitude}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Delivery Longitude */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Delivery Address Longitude
            </label>
            <input
              type="text"
              name="longitude"
              defaultValue={parcel.longitude}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Price (Auto-calculated) */}
          <div>
            <label className="block text-sm font-medium mb-1">Price (Tk)</label>
            <input
              type="text"
              name="price"
              value={price}
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#f39c12] text-black exo-font transition-all py-2 my-4 rounded-lg hover:bg-[#333] hover:text-white"
          >
            Update Booked Parcel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateParcel;
