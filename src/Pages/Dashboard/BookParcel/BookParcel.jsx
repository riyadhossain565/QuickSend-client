import useAuth from "@/src/Hooks/useAuth/useAuth";
import React from "react";
import { Helmet } from "react-helmet-async";

const BookParcel = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Book A Parcel | Dashboard</title>
      </Helmet>
      <div className="max-w-lg mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Book a Parcel</h2>
        <form
          //   onSubmit={handleSubmit}
          className="space-y-4"
        >
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
            <input
              type="date"
              name="deliveryDate"
              className="w-full px-4 py-2 border rounded-lg"
              required
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
              readOnly
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Book Parcel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookParcel;
