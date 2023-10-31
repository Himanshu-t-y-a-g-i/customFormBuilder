import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Error404 } from "../Components/Error404"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}