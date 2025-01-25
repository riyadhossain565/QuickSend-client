import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://quick-send-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
