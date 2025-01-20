
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAllParcels = () => {
    // tanstack query
  const axiosSecure = useAxiosSecure();
  const { data: allParcels = [], refetch } = useQuery({
    queryKey: ["allParcels"],
    queryFn: async () => {
      const res = await axiosSecure.get('/all-parcels');
      return res.data;
    },
  });
  return [allParcels, refetch];
};

export default useAllParcels;
