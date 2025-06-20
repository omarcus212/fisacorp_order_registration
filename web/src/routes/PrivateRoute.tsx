import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRouter = ({ children }: PrivateRouteProps) => {
  const user = localStorage.getItem('user');

  return user ? children : <Navigate to="/" replace />;
};


export default PrivateRouter;

