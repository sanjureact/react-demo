import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../Componets/Layout/Layout";

const useAuth = () => {
  let usertoken = JSON.parse(localStorage.getItem("user"));
  if (usertoken) {
    return true;
  } else {
    return false;
  }
};

export const PrivateRoute = ({ isAuthenticated }) => {
  const auth = JSON.parse(localStorage.getItem("user"));
  const isAuth = useAuth();
  return (
    <React.Fragment>
      {isAuthenticated ? (
        <Layout />
      ) : (
        <Navigate to="/" replace state={{ path: location.pathname }} />
      )}
    </React.Fragment>
  );
};
