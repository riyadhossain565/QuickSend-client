import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const AllDeliveryMan = () => {
  
  const axiosSecure = useAxiosSecure();

  const { data: deliveryMen = [] } = useQuery({
    queryKey: ["deliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-deliveryMen");
      console.log(res.data)
      return res.data;
    },
  });



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
                   <TableCell className="px-8">{item.parcelsDeliveredCount}</TableCell>
              <TableCell className="px-8">{item.averageReview}</TableCell> 
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
