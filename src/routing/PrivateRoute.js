import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../Componets/Layout/Layout";

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = JSON.parse(localStorage.getItem("user"));
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  const auth = true; // determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isLoggedIn ? <Layout /> : <Navigate to="/login" replace />;
};
