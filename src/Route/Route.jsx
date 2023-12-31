import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Destination from "../Pages/Destination/Destination/Destination";
import Gallery from "../Pages/Gallery/Gallery";
import DestinationDetails from "../Pages/Destination/Destination/DestinationDetails/DestinationDetails";
import SignIn from "../Pages/Login/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import RegisteredPeople from "../Pages/RegisteredPeople/RegisteredPeople";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import PopularDetails from "../Pages/Home/PopularDestination/PopularDetails";
import VanueDetail from "../Pages/Home/BestVanue/VanueDetail";
import Interested from "../Pages/Home/BestVanue/Interested";
import ArticleDetail from "../Pages/Home/Article/ArticleDetail";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/destination",
            element:<Destination></Destination>
        },
        {
            path: "/gallery",
            element:<Gallery></Gallery>
        },
        {
            path: "/login",
            element:<SignIn></SignIn>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/interested",
            element: <PrivateRoute> <Interested></Interested> </PrivateRoute>
        },
        // {
        //     path: "/registered-people",
        //     element: <RegisteredPeople></RegisteredPeople>
        // },
        {
          path: "/destination/:_id",
          element: <PrivateRoute><DestinationDetails></DestinationDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://travel-journal-server.vercel.app/destination/${params._id}`)
      },

        {
          path: "/popularDetails/:_id",
          element: <PrivateRoute> <PopularDetails></PopularDetails> </PrivateRoute>,
          loader: ({params}) => fetch(`https://travel-journal-server.vercel.app/popularDestination/${params._id}`)
      },

        {
          path: "/vanueTour/:_id",
          element: <PrivateRoute> <VanueDetail></VanueDetail> </PrivateRoute>,
          loader: ({params}) => fetch(`https://travel-journal-server.vercel.app/vanue/${params._id}`)
      },

        {
          path: "/article/:_id",
          element: <PrivateRoute> <ArticleDetail></ArticleDetail> </PrivateRoute>,
          loader: ({params}) => fetch(`https://travel-journal-server.vercel.app/article/${params._id}`)
      },
      ]
    },

    // for dashbpard route
    {
      path:"dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
          {
            path: "mycart",
            element:<MyCart></MyCart>
          },
          {
            path: "allUser",
            element: <AllUsers></AllUsers>
          },
          {
            path: "addItem",
            element: <AdminRoute> <AddItem></AddItem> </AdminRoute>
          },
          {
            path: "manageItems",
            element: <AdminRoute> <ManageItems></ManageItems> </AdminRoute>
          },
      ]
    }
  ]);