import axios from "axios"
import { CLEARALERT, ERROR, LOADING, LOGIN, LOGOUT, LSCHECK, SIGNUP } from "./actionTypes"

const alertTime = 3000;

const clearalert = () => {
    return { type: CLEARALERT };
}

const loading = () => {
    return { type: LOADING }
}

const error = (payload) => {
    return { type: ERROR, payload }
}

const login = (payload) => {
    return { type: LOGIN, payload }
}

const logout = () => {
    return { type: LOGOUT }
}

const signup = () => {
    return { type: SIGNUP }
}

const lscheck = (payload) => {
    return { type: LSCHECK, payload }
}

export const lscheckF = data => dispatch => {
    dispatch(lscheck(data));
}

export const loginF = data => dispatch => {
    dispatch(loading())
    axios.post(`${process.env.REACT_APP_FORMCREATOR_URL}/user/login`, data).then(res => {
        const obj = {
            token: res.data.token,
            isAuth: true
        }
        localStorage.setItem("formCreatorAppData", JSON.stringify(obj));
        dispatch(login(res.data));
        setTimeout(() => {
            dispatch(clearalert());
        }, alertTime)
    }).catch(e => {
        const err = (e.response && e.response.data) || e.message;
        dispatch(error(err));
        setTimeout(() => {
            dispatch(clearalert());
        }, alertTime)
    })
}

export const logoutF = () => dispatch => {
    dispatch(logout());
    const obj = {
        isAuth: false,
        token: ""
    }
    localStorage.setItem("formCreatorAppData", JSON.stringify(obj));
    setTimeout(() => {
        dispatch(clearalert());
    }, alertTime)
}

export const signupF = data => dispatch => {
    dispatch(loading());
    console.log(data);
    axios.post(`${process.env.REACT_APP_FORMCREATOR_URL}/user/register`, data).then(res => {
        console.log(res)
        dispatch(signup());
        setTimeout(() => {
            dispatch(clearalert());
        }, alertTime)
    }).catch(e => {
        console.log(e)
        const err = (e.response && e.response.data) || e.message;
        dispatch(error(err));
        setTimeout(() => {
            dispatch(clearalert());
        }, alertTime)
    })
}