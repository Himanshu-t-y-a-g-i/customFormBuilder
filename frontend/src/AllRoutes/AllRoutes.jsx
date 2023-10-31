import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Error404 } from "../Components/Error404"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"
import { PrivateRoute } from "../Components/PrivateRoute"
import { Dashboard } from "../Pages/Dashboard"
import { CreateForm } from "../Pages/CreateForm"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/create_form" element={<PrivateRoute><CreateForm /></PrivateRoute>} />
            < Route path="*" element={< Error404 />} />
        </Routes >
    )
}