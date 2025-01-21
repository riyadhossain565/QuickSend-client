import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth"; // Provides the logged-in user's info
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useUserRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: userRole, isLoading } = useQuery({
    queryKey: [user?.email, "user"],
    queryFn: async () => {
      const res = await axiosSecure(`/users/${user.email}`);
      // console.log(res.data)
      return res.data;
    },
  });
  return [userRole, isLoading];
};

export default useUserRole;
