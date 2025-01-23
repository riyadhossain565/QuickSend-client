import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import BookParcel from "../Pages/Dashboard/UserDashboard/BookParcel/BookParcel";
import MyParcels from "../Pages/Dashboard/UserDashboard/MyParcels/MyParcels";
import MyProfile from "../Pages/Dashboard/UserDashboard/MyProfile/MyProfile";
import UpdateParcel from "../Components/UpdateParcel/UpdateParcel";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUser/AllUsers";
import AdminStat from "../Pages/Dashboard/AdminDashboard/AdminStat/AdminStat"
import AllParcels from "../Pages/Dashboard/AdminDashboard/AllParcels/AllParcels";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllDeliveryMan from "../Pages/Dashboard/AdminDashboard/AllDeliveryMan/AllDeliveryMan";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      },
      {
        path: "my-parcels",
        element: <MyParcels />
      },,
      {
        path: "update-parcel/:id",
        element: <UpdateParcel />,
        
      },
      {
        path: "my-profile",
        element: <MyProfile />
      },
      // Admin menu
      {
        path: "statistics",
        element: <AdminStat />
      },
      {
        path: "all-users",
        element: <AllUsers />
      },
      {
        path: "all-parcels",
        element: <AllParcels />
      },
      {
        path: "all-deliveryMen",
        element: <AllDeliveryMan />
      }
    ],
  },
]);

export default Route;
