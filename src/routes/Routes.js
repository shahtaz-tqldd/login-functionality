import { createBrowserRouter } from "react-router-dom";
import EmailVerified from "../pages/EmailVerified";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><Homepage/></PrivateRoute>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/verify-email',
        element: <EmailVerified/>
    },
])