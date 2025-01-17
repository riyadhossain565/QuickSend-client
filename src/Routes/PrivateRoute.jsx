import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <span className="icon-[svg-spinners--12-dots-scale-rotate] w-6 h-6 block mx-auto text-[#333]"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
