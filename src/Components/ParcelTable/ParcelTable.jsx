import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import React from "react";
import { FaCommentDollar } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { MdMovieEdit, MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";

const ParcelTable = ({ item }) => {
  const {
    _id,
    parcelType,
    deliveryDate,
    status,
    bookingDate,
    deliveryManId,
    approximateDeliveryDate,
  } = item || {};

  const handleUpdate = (parcelId) => {
    console.log("Update parcel:", parcelId);
  };

  const handleCancel = (parcelId) => {
    console.log("Cancel parcel:", parcelId);
  };

  const handleReview = (parcelId) => {
    console.log("Review parcel:", parcelId);
  };

  const handlePay = (parcelId) => {
    console.log("Pay for parcel:", parcelId);
  };

  return (
    <TableRow className="border-2 bg-gray-100 transition-all hover:bg-gray-200">
      <TableCell>{parcelType}</TableCell>
      <TableCell>{format(new Date(deliveryDate), "P")}</TableCell>
      <TableCell>
        {approximateDeliveryDate ? approximateDeliveryDate : "Not Assigned"}
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
          <Button variant="outline" className="bg-green-400 hover:bg-green-500 px-2 py-1">
            <MdMovieEdit className="text-xl" />
          </Button>
        </Link>
      </TableCell>
      <TableCell>
        {" "}
        <Button
          variant="outline"
          
          className=" bg-red-400 hover:bg-red-500 px-2 py-1"
          // onClick={() => handleCancel(parcel.id)}
        >
          <GiCancel className="text-xl" />
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="outline"
          className=" bg-blue-400 hover:bg-blue-500 px-2 py-1"
          // onClick={() => handlePay(parcel.id)}
        >
          <FaCommentDollar className="text-xl" />
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="outline"
          className={` px-2 py-1 ${
            item.bookingStatus !== "delivered"
              ? "cursor-not-allowed bg-gray-300"
              : "cursor-pointer bg-yellow-400 hover:bg-yellow-500"
          }`}
          //   onClick={() => handleReview(parcel.id)}
          disabled={item.bookingStatus !== "delivered"}
        >
          <MdRateReview className="text-xl" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ParcelTable;
