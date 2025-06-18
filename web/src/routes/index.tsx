import type React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageRegister from "../pages/Register";
import OrderProduct from "../pages/OrderProduct";
import PrivateRouter from "./PrivateRoute";


const Routing: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/register" replace />} />
                <Route index path={'/register'} element={<PageRegister />} />
                <Route path="/orderproduct" element={<PrivateRouter><OrderProduct /></PrivateRouter>} />
            </Routes>
        </BrowserRouter>
    );

}

export default Routing;