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

const AllDeliveryMan = () => {
  const [users] = useUsers();

  const deliveryMen = users.filter((user) => user.role === "deliveryMan");

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Helmet>
        <title>All Delivery Men | Dashboard</title>
      </Helmet>

      <h2 className="text-4xl font-bold text-center cinzel-font mb-8">
        All Delivery Men
      </h2>
      <div className="">
        <div className="overflow-x-auto rounded-lg max-w-4xl mx-auto bg-white shadow-md">
          <Table>
            <TableHeader className="bg-[#1a1a1a] text-white">
              <TableRow>
                <TableHead className="px-4 py-5 font-bold">Name</TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Phone Number
                </TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Number of Parcels delivered
                </TableHead>
                <TableHead className="px-4 py-5 font-bold">
                  Average review
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {deliveryMen.map((item) => (
            <TableRow className="border-2 bg-white transition-all hover:bg-gray-200">
              <TableCell className="px-8">{item.name}</TableCell>
              <TableCell className="px-8">
                {item.phoneNumber || "N/A"}
              </TableCell>
              {/* <TableCell className="px-8">{item.}</TableCell>
              <TableCell className="px-8">{user.totalSpent}</TableCell> */}
             
            </TableRow>
          ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
