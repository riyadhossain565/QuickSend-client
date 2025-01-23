import errorAnimation from "../../assets/error/error.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>404 | Error Page</title>
      </Helmet>
      <h2 className="text-3xl text-center mt-8">
        <Link
          className="bg-yellow-400 transition-all hover:bg-red-500 px-6 py-2 rounded-full font-bold "
          to="/"
        >
          Return To Home
        </Link>
      </h2>
      <Lottie animationData={errorAnimation} className="w-3/5 mx-auto" />
    </div>
  );
};

export default ErrorPage;
