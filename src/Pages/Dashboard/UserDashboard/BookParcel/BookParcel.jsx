import useAuth from "@/src/Hooks/useAuth/useAuth";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const BookParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const [price, setPrice] = useState(50);

  // Handle price calculation based on parcel weight
  const handleWeightChange = (e) => {
    const weight = parseFloat(e.target.value) || 0;
    if (weight > 2) setPrice(150);
    else setPrice(weight * 50); // Price per kg (50Tk)
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const phoneNumber = form.phoneNumber.value;
    const parcelType = form.parcelType.value;
    const parcelWeight = form.parcelWeight.value;
    const receiverName = form.receiverName.value;
    const receiverPhone = form.receiverPhone.value;
    const deliveryAddress = form.deliveryAddress.value;
    const deliveryDate = startDate;
    const latitude = form.latitude.value;
    const longitude = form.longitude.value;

    const newBooking = {
      name,
      email,
      phoneNumber,
      parcelType,
      parcelWeight,
      receiverName,
      receiverPhone,
      deliveryAddress,
      deliveryDate,
      latitude,
      longitude,
      price,
      status: "pending",
      bookingDate: new Date(Date.now()).toISOString(),
    };

    console.log(newBooking);

    try {
      // 1. make a post request
      await axiosSecure.post("/book-parcel", newBooking);
      // 2. Reset form
      form.reset();
      // 3. sweet alert
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Parcel Successfully Booked",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Book A Parcel | Dashboard</title>
      </Helmet>
      <div className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 cinzel-font">
          Book a Parcel
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
            className="w-full bg-[#f39c12] text-black py-2 rounded-lg hover:bg-[#333] hover:text-white"
          >
            Book Parcel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookParcel;
