import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";
import Login from "../paginas/Login";

const PrivateRoute = (props: JSX.IntrinsicAttributes & RouteProps) => {
  const token = localStorage.getItem("auth");
  return <>{token ? <Route {...props} /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;