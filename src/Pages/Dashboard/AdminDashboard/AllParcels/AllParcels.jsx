import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAllParcels from "@/src/Hooks/useAllParcels/useAllParcels";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const AllParcels = () => {
  const [allParcels, refetch] = useAllParcels();
  const [selectedDeliveryMan, setSelectedDeliveryMan] = useState("");
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const [isOpen, setIsOpen] = useState(false);

  const { data: deliveryMen = [] } = useQuery({
    queryKey: ["deliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/byRole/deliveryMan");
      return res.data;
    },
  });

  const handleManage = (item) => {
    setSelectedParcel(item);
    setIsOpen(true);
  };

  const handleAssign = async () => {
    try {
      const { data } = await axiosSecure.put(`/parcels/${selectedParcel._id}`, {
        deliveryManId: selectedDeliveryMan,
        approximateDeliveryDate: deliveryDate,
        status: "On The Way",
      });
      console.log(data); 
      toast.success("Delivery Man assigned successfully!");
      setIsOpen(false);
  
      // Refetch parcels to ensure the UI shows updated data
      refetch();
    } catch (error) {
      console.error("Error assigning parcel:", error);
      toast.error("Failed to assign parcel.");
    }
  };
   
  // console.log("delivery Men--->",deliveryMen);
  // console.log(selectedDeliveryMan);

  return (
    <div className="p-6">
      <Helmet>
        <title>All Users | Dashboard</title>
      </Helmet>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center cinzel-font mt-6">
          All Parcels
        </h2>

        <h2 className="text-2xl font-bold ml-4 mb-4 exo-font">
          Total Parcels: {allParcels.length}
        </h2>

        <div className="overflow-x-auto max-w-5xl mx-auto shadow-md">
          <Table>
            <TableHeader className="bg-[#1f1f1f] text-white">
              <TableRow className="rounded-lg">
                <TableHead className="py-5 font-bold">#</TableHead>
                <TableHead className="py-5 font-bold">User's Name</TableHead>
                <TableHead className="py-5 font-bold">User's Phone</TableHead>
                <TableHead className="py-5 font-bold">Booking Date</TableHead>
                <TableHead className="py-5 font-bold">
                  Requested Delivery Date
                </TableHead>
                <TableHead className="py-5 font-bold">Cost</TableHead>
                <TableHead className="py-5 font-bold">Status</TableHead>
                <TableHead className="py-5 font-bold">Manage Button</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allParcels.map((item, index) => (
                <TableRow key={item._id} className="border-2 bg-gray-100 transition-all hover:bg-gray-200">
                  <TableCell className="">{index + 1}</TableCell>
                  <TableCell className="pl-8">{item.name}</TableCell>
                  <TableCell className="pl-8">{item.phoneNumber}</TableCell>
                  <TableCell className="pl-8">
                    {format(new Date(item.bookingDate), "P")}
                  </TableCell>
                  <TableCell className="pl-8">
                    {format(new Date(item.deliveryDate), "P")}
                  </TableCell>
                  <TableCell className="pl-8">{item.price}</TableCell>
                  <TableCell className="pl-8">{item.status}</TableCell>
                  <TableCell className="pl-8">
                    <Button
                      variant="outline"
                      className="hover:bg-[#f39c12]"
                      onClick={() => handleManage(item)}
                    >
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

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
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Manage Parcel</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Choose a Delivery Man:
              </label>
              <select
                id="options"
                 value={selectedDeliveryMan}
                onChange={(e) => setSelectedDeliveryMan(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {deliveryMen.map((man) => (
                  <option key={man._id} value={man._id}>
                    {man.name}
                  </option>
                ))}
              </select>

              <div className="my-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Approximate delivery date:
                </label>
                <DatePicker
                  className="border p-2 rounded-md"
                  selected={deliveryDate}
                  onChange={(date) => setDeliveryDate(date)}
                />
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
              <button
                onClick={handleAssign}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllParcels;
