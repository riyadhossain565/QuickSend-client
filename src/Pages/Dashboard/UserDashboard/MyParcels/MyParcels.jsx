import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Assuming shadcn/ui table components
import ParcelTable from "@/src/Components/ParcelTable/ParcelTable";
import useParcel from "@/src/Hooks/useParcel/useParcel";

const MyParcels = () => {
  const [parcel, refetch] = useParcel();

  return (
    <div className="p-5">
      <Helmet>
        <title>My Parcels | Dashboard</title>
      </Helmet>

      <h2 className="text-4xl font-bold text-center cinzel-font">My Parcels</h2>
      <h2 className="text-2xl font-bold mb-4 exo-font">
        Total Parcel: {parcel.length}
      </h2>

      <div className="overflow-x-auto  rounded-xl">
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
              <TableHead className="px-4 py-3">Status</TableHead>
              <TableHead className="px-4 py-3">Update</TableHead>
              <TableHead className="px-4 py-3">Cancel</TableHead>
              <TableHead className="px-4 py-3">Pay</TableHead>
              <TableHead className="px-4 py-3">Review</TableHead>
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
  );
};

export default MyParcels;
