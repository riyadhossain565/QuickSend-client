import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import React from "react";
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
    <TableRow className="border-2 hover:bg-gray-200">
      <TableCell>{parcelType}</TableCell>
      <TableCell>{format(new Date(deliveryDate), "P")}</TableCell>
      <TableCell>
        {approximateDeliveryDate ? approximateDeliveryDate : "Not Assigned"}
      </TableCell>
      <TableCell>{format(new Date(bookingDate), "P")}</TableCell>
      <TableCell>{deliveryManId ? deliveryManId : "Not Assigned"}</TableCell>
      <TableCell className="text-orange-500">{status}</TableCell>
      <TableCell>
        <div className="flex  gap-2">
          <Link to={`/dashboard/update-parcel/${_id}`}>
            <Button
              size="sm"
              className="text-green-500 bg-green-100/90 hover:underline px-2 py-1"
            >
              Update
            </Button>
          </Link>
          <Button
            variant="destructive"
            size="sm"
            className="text-red-500 bg-red-100/90 px-2 py-1 hover:underline"
            // onClick={() => handleCancel(parcel.id)}
          >
            Cancel
          </Button>
          {item.bookingStatus === "delivered" && (
            <Button
              variant="success"
              size="sm"
              className="text-yellow-500 bg-yellow-100/90 px-2 py-1 hover:underline"
              //   onClick={() => handleReview(parcel.id)}
            >
              Review
            </Button>
          )}
          <Button
            variant="secondary"
            size="sm"
            className="text-blue-500 bg-blue-100/90 px-2 py-1 hover:underline"
            // onClick={() => handlePay(parcel.id)}
          >
            Pay
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ParcelTable;
