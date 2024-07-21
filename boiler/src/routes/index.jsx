import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/Firebase";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Home from "../Components/Home";
import PrivateRoute from "../Components/PrivateRoute";

const Routes = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            element: <PrivateRoute user={user} />,
            children: [
              {
                path: "/login",
                element: <Login />,
              },
              {
                path: "/signup",
                element: <SignUp />,
              },
            ],
        }
      ],
     
    },
  ]);
};

export default Routes;
