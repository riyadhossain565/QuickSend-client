import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import useUsers from "@/src/Hooks/useUsers/useUsers";
import { format } from "date-fns";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCommentDollar } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdMovieEdit, MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import ReviewModal from "../ReviewModal/ReviewModal";

const ParcelTable = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const [users] = useUsers();
  // console.log(users);

  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParcel, setSelectedParcel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleReview = (item) => {
    setSelectedParcel(item);
    setIsOpen(true);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = users?.name;
    const userImg = users?.image;
    const rating = form.rating.value;
    const feedback = form.feedback.value;
    const deliveryManId = item.deliveryManId;
    const createdAt = new Date(Date.now()).toISOString();

    const newReview = {
      userName,
      userImg,
      rating,
      feedback,
      deliveryManId,
      createdAt,
    };
    console.log(newReview);

    try {
      // 1. make a post request
      await axiosSecure.post("/reviews", newReview);
      // 2. Reset form
      form.reset();
      // 3. sweet alert
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Review send Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const {
    _id,
    name,
    parcelType,
    deliveryDate,
    status,
    bookingDate,
    deliveryManId,
    approximateDeliveryDate,
  } = item || {};

  const handleCancel = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.patch(`/parcels/status/${id}`, {
          status: "Cancelled",
        });
        refetch();
        Swal.fire({
          title: "Cancelled!",
          text: "Your order has been canceled.",
          icon: "success",
        });
      } catch (error) {
        console.error("Error cancelling the order:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to cancel the order. Please try again.",
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <TableRow className="border-2 bg-gray-100 transition-all hover:bg-gray-200">
        <TableCell>{parcelType}</TableCell>
        <TableCell>{format(new Date(deliveryDate), "P")}</TableCell>
        <TableCell>
          {approximateDeliveryDate
            ? format(new Date(approximateDeliveryDate), "P")
            : "Not Assigned"}
        </TableCell>
        <TableCell>{format(new Date(bookingDate), "P")}</TableCell>
        <TableCell>{deliveryManId ? deliveryManId : "Not Assigned"}</TableCell>
        <TableCell>
          <p className="text-orange-600 bg-orange-500/30 p-1 rounded-md">
            {status}
          </p>
        </TableCell>
        <TableCell>
          <Link to={`/dashboard/update-parcel/${_id}`}>
            <Button
              variant="outline"
              className="bg-green-400 hover:bg-green-500 px-2 py-1"
            >
              <MdMovieEdit className="text-xl" />
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Button
            variant="outline"
            className={`px-2 py-1 ${
              status === "pending"
                ? "cursor-pointer bg-red-400 hover:bg-red-500"
                : "cursor-not-allowed bg-gray-300"
            }`}
            onClick={() => handleCancel(_id)}
            disabled={status !== "pending"}
          >
            <GiCancel className="text-xl" />
          </Button>
        </TableCell>
        <TableCell>
          <Link to={`/dashboard/payment/${_id}`}>
            <Button
              variant="outline"
              className=" bg-blue-400 hover:bg-blue-500 px-2 py-1"
            >
              <FaCommentDollar className="text-xl" />
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Button
            variant="outline"
            className={` px-2 py-1 ${
              status === "Delivered"
                ? "cursor-pointer bg-yellow-400 hover:bg-yellow-500"
                : "cursor-not-allowed bg-gray-300"
            }`}
            onClick={() => handleReview(item)}
            disabled={status !== "Delivered"}
          >
            <MdRateReview className="text-xl" />
          </Button>
        </TableCell>
      </TableRow>

      {/* Manage Modal */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} // Close modal on backdrop click
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-center items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-bold cinzel-font">Give A Review</h3>
            </div>

            <form onSubmit={handleSubmitReview}>
              {/* Modal Content */}
              <div className="mb-4">
                {/* image */}
                <div className="mb-2">
                  <img src={users.image} alt="user image" />
                </div>
                {/* name */}
                <div>
                  <label className="block font-medium mb-2">User's Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    readOnly
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
                    required
                  />
                </div>
                {/* rating */}
                <div>
                  <label className="block font-medium mb-2">Rating:</label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Out of 5"
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>
                {/* Delivery man id */}
                <div className="my-2">
                  <label className="block font-medium mb-2">
                    Delivery Man Id:
                  </label>
                  <input
                    type="text"
                    name="deliveryManId"
                    value={deliveryManId}
                    readOnly
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
                    required
                  />
                </div>
                {/* feedback */}
                <div className="my-2">
                  <label className="block font-medium mb-2">Feedback:</label>
                  <textarea
                    name="feedback"
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ParcelTable;
