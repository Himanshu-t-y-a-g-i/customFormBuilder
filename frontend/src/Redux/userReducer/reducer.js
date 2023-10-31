import { CLEARALERT, ERROR, LOADING, LOGIN, LOGOUT, LSCHECK, SIGNUP } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    alert: false,
    alertDesc: "",
    alertType: ""
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case CLEARALERT:
            return { ...state, alert: false, alertDesc: "", alertType: "" };
        case LOADING:
            return { ...state, isLoading: true, isError: false, alert: true, alertDesc: "Loading", alertType: "loading" };
        case ERROR:
            return { ...state, isLoading: false, isError: true, alert: true, alertDesc: payload.msg || payload, alertType: "error" };
        case LOGIN:
            return { ...state, isLoading: false, isError: false, isAuth: true, token: payload.token, alert: true, alertDesc: "User Logged In", alertType: "success" };
        case LOGOUT:
            return { ...state, isLoading: false, isError: false, isAuth: false, token: "", response: "User Logged Out", alert: true, alertDesc: "User Logged Out", alertType: "success" };
        case SIGNUP:
            return { ...state, isLoading: false, isError: false, alert: true, alertDesc: "User Registered", alertType: "success" };
        case LSCHECK:
            return { ...state, isAuth: true, token: payload }
        default:
            return state;
    }
}