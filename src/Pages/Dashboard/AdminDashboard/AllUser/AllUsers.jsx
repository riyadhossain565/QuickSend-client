import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxiosPublic from "@/src/Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import useUsers from "@/src/Hooks/useUsers/useUsers";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserTag } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  const axiosSecure = useAxiosSecure()
  const axiosPublic = useAxiosPublic()

  const {data: count } = useQuery({
    queryKey:["count"],
    queryFn: async () => {
      const res = await axiosPublic('/usersCount');
      return res.data;
    }
  })

  console.log(count)

  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(count / itemsPerPage)

  // const pages = [...Array(numberOfPages).keys()]

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
                  <TableCell className="px-8">{user.phoneNumber || "N/A"}</TableCell>
                  <TableCell className="px-8">{user.totalParcels}</TableCell>
                  <TableCell className="px-8">{user.totalSpent}</TableCell>
                  <TableCell className="px-8">
                    {
                      user.role === "deliveryMan" ? (
                        <p className="font-bold ml-6 text-gray-600">Delivery Man</p>
                      ) : (
                        <Button
                      variant="outline"
                      className="bg-blue-500/60 hover:bg-blue-600 transition-all ml-6"
                      onClick={() => handleMakeDeliveryMan(user)}
                     
                    >
                      <GrUserWorker className="text-xl" />
                    </Button>
                      )
                    }
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
      </div>
    </div>
  );
};

export default AllUsers;
