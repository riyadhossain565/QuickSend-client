import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      path: 'signin',
      element: <Login />
    },
    {
      path: 'signup',
      element: <SignUp />
    }
  ]);
  
export default Route;