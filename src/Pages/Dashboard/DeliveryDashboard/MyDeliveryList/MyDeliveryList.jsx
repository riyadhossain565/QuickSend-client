import useAuth from "@/src/Hooks/useAuth/useAuth";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import useDeliveryList from "@/src/Hooks/useDeliveryList/useDeliveryList";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import Swal from "sweetalert2";

const MyDeliveryList = () => {

  const axiosSecure = useAxiosSecure();

  const { user } = useAuth(); // Get the logged-in user's email
  const email = user?.email; // Ensure email is available

  const [ parcels ] = useDeliveryList(email);

  // status change to cancel 
  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!"
    });
  
    if (result.isConfirmed) {
      try {
        await axiosSecure.patch(`/parcels/status/${id}`, { status: "Cancelled" });
        Swal.fire({
          title: "Cancelled!",
          text: "Your order has been canceled.",
          icon: "success"
        });
      } catch (error) {
        console.error("Error cancelling the order:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to cancel the order. Please try again.",
          icon: "error"
        });
      }
    }
  };

   const handleDeliver = async (id) => {
    const result = await Swal.fire({
      title: "Did you deliver the parcel?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delivered it!"
    });
  
    if (result.isConfirmed) {
      try {
        await axiosSecure.patch(`/parcels/status/${id}`, { status: "Delivered" });
        Swal.fire({
          title: "Delivered!",
          text: "Your Parcel has been Delivered.",
          icon: "success"
        });
      } catch (error) {
        console.error("Error cancelling the order:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to cancel the order. Please try again.",
          icon: "error"
        });
      }
    }
  };
  


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">My Delivery List</h2>
     
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border border-gray-200 px-4 py-2">
                  Booked User's Name
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Receiver's Name
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Booked User's Phone
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Requested Delivery Date
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Approximate Delivery Date
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Receiver's Phone
                </th>
                <th className="border border-gray-200 px-4 py-2">
                  Receiver's Address
                </th>
                <th className="border border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {parcels.map((parcel) => (
                <tr key={parcel._id} className="hover:bg-gray-100">
                  <td className="border border-gray-200 px-4 py-2">
                    {parcel.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {parcel.receiverName}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {parcel.phoneNumber || "N/A"}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    
                    {format(new Date(parcel.deliveryDate), "P")}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    
                    {format(new Date(parcel.approximateDeliveryDate), "P")}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {parcel.receiverPhone}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {parcel.deliveryAddress}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 space-y-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    //   onClick={() => setSelectedParcel(parcel)}
                    >
                        Location
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleCancel(parcel._id)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={() => handleDeliver(parcel._id)}
                    >
                      Deliver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
     
    </div>
  );
};

export default MyDeliveryList;
