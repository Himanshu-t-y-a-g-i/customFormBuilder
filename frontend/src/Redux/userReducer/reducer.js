import { CLEARALERT, ERROR, LOADING, LOGIN, LOGOUT, LSCHECK, SIGNUP } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    isAlert: false,
    alertDesc: "",
    alertType: ""
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case CLEARALERT:
            return { ...state, isAlert: false, alertDesc: "", alertType: "" };
        case LOADING:
            return { ...state, isLoading: true, isError: false, isAlert: true, alertDesc: "Loading", alertType: "loading" };
        case ERROR:
            return { ...state, isLoading: false, isError: true, isAlert: true, alertDesc: payload.msg || payload, alertType: "error" };
        case LOGIN:
            return { ...state, isLoading: false, isError: false, isAuth: true, token: payload.token, isAlert: true, alertDesc: "User Logged In", alertType: "success" };
        case LOGOUT:
            return { ...state, isLoading: false, isError: false, isAuth: false, token: "", response: "User Logged Out", isAlert: true, alertDesc: "User Logged Out", alertType: "success" };
        case SIGNUP:
            return { ...state, isLoading: false, isError: false, isAlert: true, alertDesc: "User Registered", alertType: "success" };
        case LSCHECK:
            return { ...state, isAuth: true, token: payload }
        default:
            return state;
    }
}