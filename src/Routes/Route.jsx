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
import MyDeliveryList from "../Pages/Dashboard/DeliveryDashboard/MyDeliveryList/MyDeliveryList";
import Myreviews from "../Pages/Dashboard/DeliveryDashboard/MyReviews/Myreviews";
import Payment from "../Components/Payment/Payment";
import PaymentSuccess from "../Components/Payment/PaymentSuccess";

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
      {
        path: "payment/:id",
        element: <Payment />
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />
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
      },
      // deliveryMan menu
      {
        path: "my-delivery-list",
        element: <MyDeliveryList />
      },
      {
        path: "my-reviews",
        element: <Myreviews />
      }
    ],
  },
]);

export default Route;
