import { AuthContext } from "@/src/Provider/AuthProvider";
import { useContext } from "react";


const useAuth = () => {

    const auth = useContext(AuthContext)

    return auth;
};

export default useAuth;