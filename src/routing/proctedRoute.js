import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Componets/Layout/Layout";

const useAuth = () => {
  let usertoken = JSON.parse(localStorage.getItem("user"));
  if (usertoken) {
    return true;
  } else {
    return false;
  }
};
const ProtectedRoute = (props) => {
  const auth = useAuth();
  return (
    <React.Fragment>
      {auth ? (
        <Layout />
      ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      )}
    </React.Fragment>
  );
};
export default ProtectedRoute;
