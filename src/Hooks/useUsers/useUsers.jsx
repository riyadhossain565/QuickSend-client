import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useAuth from "../useAuth/useAuth";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: users = [], refetch } = useQuery({
    queryKey: [user?.email, "users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUsers;
