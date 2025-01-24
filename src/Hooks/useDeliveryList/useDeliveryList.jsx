import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";

const useDeliveryList = (email) => {
  const axiosSecure = useAxiosSecure();

  const { data: deliveryManId } = useQuery({
    queryKey: ["deliveryManId", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${email}`);
      return res.data._id; // Extract deliveryManId from user data
    },
  });

  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ["deliveryList", deliveryManId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/myDeliveryList/${deliveryManId}`);
      return res.data;
    },
  });

  return [parcels, isLoading];
};

export default useDeliveryList;
