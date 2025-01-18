import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Assuming shadcn/ui table components
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loadingspinner from "@/src/Shared/LoadingSpinner/Loadingspinner";
import ParcelTable from "@/src/Components/ParcelTable/ParcelTable";
import useParcel from "@/src/Hooks/useParcel/useParcel";

const MyParcels = () => {
  const [parcel, refetch] = useParcel();

  return (
    <div>
      <Helmet>
        <title>My Parcels | Dashboard</title>
      </Helmet>
      <div className="max-w-5xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center cinzel-font">
          My Parcels
        </h2>
        <h2 className="text-2xl font-bold mb-4 exo-font">
          Total Parcel: {parcel.length}
        </h2>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[#333] text-white ">
              <TableRow>
                <TableHead className="px-4 py-3">Parcel Type</TableHead>
                <TableHead className="px-4 py-3">
                  Requested Delivery Date
                </TableHead>
                <TableHead className="px-4 py-3">
                  Approximate Delivery Date
                </TableHead>
                <TableHead className="px-4 py-3">Booking Date</TableHead>
                <TableHead className="px-4 py-3">Delivery Man ID</TableHead>
                <TableHead className="px-4 py-3">Booking Status</TableHead>
                <TableHead className="px-4 py-3">Actions</TableHead>
              </TableRow>
            </TableHeader>
            {parcel && parcel.length > 0 ? (
              <TableBody>
                {parcel.map((item) => (
                  <ParcelTable key={item._id} item={item} />
                ))}
              </TableBody>
            ) : (
              <p className="text-center text-black">No parcels booked yet.</p>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
