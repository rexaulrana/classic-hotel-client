import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layout/Main";
import Home from "../../pages/Home/Home";
import Rooms from "../../pages/Rooms/Rooms";
import MyBookings from "../../pages/MyBookings/MyBookings";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute";
import RoomDetails from "../../components/RoomDetails/RoomDetails";
import UpdateBooking from "../../pages/MyBookings/updateBooking/UpdateBooking";
import AddReview from "../../components/RoomDetails/AddReview/AddReview";
import Error from "../../pages/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails></RoomDetails>,
        loader: () => fetch("https://classic-hotel-server.vercel.app/rooms"),
      },
      {
        path: "/updateBooking/:id",
        element: <UpdateBooking></UpdateBooking>,
        loader: ({ params }) =>
          fetch(
            `https://classic-hotel-server.vercel.app/myBookings/${params.id}`
          ),
      },
      {
        path: "/addReview/:id",
        element: <AddReview></AddReview>,
      },
    ],
  },
]);

export default Router;
