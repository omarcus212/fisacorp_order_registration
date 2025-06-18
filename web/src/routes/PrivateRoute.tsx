import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("user");

  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRouter;
