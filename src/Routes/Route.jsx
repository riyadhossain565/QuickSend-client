import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import BookParcel from "../Pages/Dashboard/BookParcel/BookParcel";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  // dashboard
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // user menu
      {
        path: "book-parcel",
        element: <BookParcel />
      }
    ],
  },
]);

export default Route;
