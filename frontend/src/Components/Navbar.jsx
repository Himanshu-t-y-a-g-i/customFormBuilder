import { Link } from "react-router-dom"
import { CustomAlert } from "./CustomAlert"
import { useDispatch, useSelector } from "react-redux"
import { logoutF } from "../Redux/userReducer/action";

export const Navbar = () => {
    const isAuth = useSelector(store => store.userReducer.isAuth);
    const dispatch = useDispatch();
    return (
        <div className={"relative flex flex-row justify-between px-10 text-lg h-[10vh]"}>
            <CustomAlert />
            <Link to={"/"}>Home</Link>
            <div className="">
                {
                    isAuth ?
                        <>
                            <Link to={"/dashboard"}>Dashboard</Link>
                            <button onClick={() => { dispatch(logoutF()) }}>Logout</button>
                        </>
                        :
                        <>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"/register"}>Register</Link>
                        </>
                }
            </div>
        </div>
    )
}