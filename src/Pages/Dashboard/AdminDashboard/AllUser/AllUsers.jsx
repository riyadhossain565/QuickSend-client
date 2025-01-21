import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useUsers from "@/src/Hooks/useUsers/useUsers";
import { Helmet } from "react-helmet-async";
import { GrUserWorker } from "react-icons/gr";
import { FaUserTag } from "react-icons/fa";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  console.log(users)


  const handleRoleChange = async () => {
    try{

    } 
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-6">
      <Helmet>
        <title>All Users | Dashboard</title>
      </Helmet>
      <div className="max-w-5xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center cinzel-font mt-6">
          All Users
        </h2>
        <h2 className="text-2xl font-bold mb-4 exo-font">
          Total Users: {users.length}
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
                  <TableCell className="px-8">{user.phoneNumber}</TableCell>
                  <TableCell className="px-8">{user.totalParcels}</TableCell>
                  <TableCell className="px-8">{user.totalSpent}</TableCell>
                  <TableCell className="px-8">

                    <Button
                      variant="outline"
                      // className=" "
                      className={`transition-all ml-6 ${
                        user.role === "admin"
                          ? "cursor-not-allowed bg-gray-300"
                          : "cursor-pointer bg-blue-500/60 hover:bg-blue-600"
                      }`}
                      onClick={() => handleRoleChange(user._id, "Delivery Men")}
                      disabled={user.role === "admin"}
                    >
                      <GrUserWorker className="text-xl" />
                    </Button>
                  </TableCell>
                  <TableCell className="px-8">

                    <Button
                      variant="outline"
                      className={`transition-all ml-6 ${
                        user.role === "admin"
                          ? "cursor-not-allowed bg-gray-300"
                          : "cursor-pointer bg-yellow-500/80 hover:bg-yellow-600"
                      }`}
                      onClick={() => handleRoleChange(user._id, "Admin")}
                      disabled={user.role === "admin"}
                    >
                      <FaUserTag className="text-xl" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
