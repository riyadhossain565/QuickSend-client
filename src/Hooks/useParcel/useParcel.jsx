import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";

const useParcel = () => {
  // tanstack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcel = [], refetch } = useQuery({
    queryKey: ["parcel", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  return [parcel, refetch];
};

export default useParcel;
