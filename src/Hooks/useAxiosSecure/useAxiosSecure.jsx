import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";


const axiosSecure = axios.create({
    baseURL: "https://quick-send-server.vercel.app",
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    // console.log('request stopped by interceptors')
    config.headers.authorization = `Bearer ${token}`
    return config
  }, function (error) {
    // do something with request error
    return Promise.reject(error)
  })

  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function(response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    // for 401 and 403 logout the user and move the user to the login
    if (status === 401 || status === 403){
      await logOut();
      navigate('/signin')
    }
    return Promise.reject(error);
  } )

    return axiosSecure
}

export default useAxiosSecure