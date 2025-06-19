import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRouter: React.FC<PrivateRouteProps> = ({ children }) => {

  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {

    const token = localStorage.getItem("user");

    if (!token) {

      setIsAuthenticated(false);

      if (location.pathname !== '/register') {
        navigate('/register');
      }

    } else {

      setIsAuthenticated(true);

    }

  }, [location.pathname]);

  if (isAuthenticated === null) return null;

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default PrivateRouter;

