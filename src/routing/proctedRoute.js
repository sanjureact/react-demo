import React, { useEffect, useState } from "react";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import Layout from "../Componets/Layout/Layout";
const ProtectedRoute = (props) => {
  const { location } = useLocation;
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [location, isLoggedIn]);
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Layout />
      ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      )}
    </React.Fragment>
  );
};
export default ProtectedRoute;
