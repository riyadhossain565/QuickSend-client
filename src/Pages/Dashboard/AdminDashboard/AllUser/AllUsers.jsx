import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import Loadingspinner from "@/src/Shared/LoadingSpinner/Loadingspinner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaUserTag } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Fetch total count of users
  const { data: count = 0 } = useQuery({
    queryKey: ["usersCount"],
    queryFn: async () => {
      const res = await axiosSecure.get("/usersCount");
      return res.data.count;
    },
  });

  // Fetch paginated users
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleMakeAdmin = async (user) => {
    try {
      const res = await axiosSecure.patch(`/users/${user._id}`, {
        role: "admin",
      });
      // console.log(res.data);
      if (res.data.matchedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.error("Error making admin:", err);
    }
  };

  const handleMakeDeliveryMan = async (user) => {
    try {
      const res = await axiosSecure.patch(`/users/${user._id}`, {
        role: "deliveryMan",
      });
      // console.log(res.data);
      if (res.data.matchedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is a Delivery Man Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.error("Error making delivery man:", err);
    }
  };

  if (isLoading) return <Loadingspinner />;

  return (
    <div className="p-6">
      <Helmet>
        <title>All Users | Dashboard</title>
      </Helmet>
      <div className="max-w-5xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center cinzel-font mb-8">
          All Users
        </h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[#333] text-white">
              <TableRow>
                <TableHead className="px-4 py-5 font-bold">
                  User's Name
                </TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Phone Number
                </TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Number of Parcels
                </TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Total Spent
                </TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Make Delivery Man
                </TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Make Admin
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user) => (
                <TableRow className="border-2 bg-gray-100 transition-all hover:bg-gray-200">
                  <TableCell className="px-8">{user.name}</TableCell>
                  <TableCell className="px-8">
                    {user.phoneNumber || "N/A"}
                  </TableCell>
                  <TableCell className="px-8">{user.totalParcels}</TableCell>
                  <TableCell className="px-8">{user.totalSpent}</TableCell>
                  <TableCell className="px-8">
                    {user.role === "deliveryMan" ? (
                      <p className="font-bold ml-6 text-gray-600">
                        Delivery Man
                      </p>
                    ) : (
                      <Button
                        variant="outline"
                        className="bg-blue-500/60 hover:bg-blue-600 transition-all ml-6"
                        onClick={() => handleMakeDeliveryMan(user)}
                      >
                        <GrUserWorker className="text-xl" />
                      </Button>
                    )}
                  </TableCell>
                  <TableCell className="px-8">
                    {user.role === "admin" ? (
                      <p className="font-bold ml-6 text-gray-600">Admin</p>
                    ) : (
                      <Button
                        variant="outline"
                        className="hover:bg-yellow-600 bg-yellow-500/80 ml-6"
                        onClick={() => handleMakeAdmin(user)}
                      >
                        <FaUserTag className="text-xl" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-10 text-lg">
          <button
            className="mr-4 border-2 border-black px-2 hover:bg-yellow-500 transition-all"
            onClick={handlePrevPage}
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              className={
                currentPage === page
                  ? "bg-yellow-500 mx-2 px-2 border-2 border-black"
                  : "mx-2 px-2 border-2 border-black"
              }
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="ml-4 border-2 border-black px-2 hover:bg-yellow-500 transition-all"
            onClick={handleNextPage}
          >
            Next
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
