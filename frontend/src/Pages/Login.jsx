import { Box, Button, FormControl, FormLabel, Input, TagLabel, Text } from "@chakra-ui/react"
import "../Styles/Universal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginF } from "../Redux/userReducer/action";

export const Login = () => {
    const initState = { password: "" };
    const [usernpass, setUsernpass] = useState(initState);
    const dispatch = useDispatch();

    // username & email switch
    const [credSwitch, setCredSwitch] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usernpass)
        dispatch(loginF(usernpass));
    }

    const handleChange = (e) => {
        const obj = { ...usernpass };
        obj[e.target.name] = e.target.value;
        if (credSwitch) {
            delete obj.username;
        } else {
            delete obj.email;
        }
        setUsernpass(obj);
        console.log(obj);
    }

    const changeValue = () => {
        const obj = usernpass;
        if (credSwitch) {
            delete obj.username;
            obj.email = "";
        } else {
            delete obj.email;
            obj.username = ""
        }
        setUsernpass(obj);
    }

    const isAuth = useSelector(store => store.userReducer.isAuth);
    if (isAuth) {
        return <Navigate to={"/"} />
    }
    return (
        <Box className="form">
            <Text>Login</Text>
            <FormControl as={"form"} width={{ 'base': "90%", 'md': '50%', 'lg': '30%' }} margin={'auto'} onSubmit={handleSubmit}>
                <Button onClick={() => { setCredSwitch(!credSwitch); changeValue() }}>Login with {credSwitch ? "Username" : "Email"}</Button>
                {
                    credSwitch ?
                        <>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input required type="email" name="email" id="email" placeholder="Enter Email" value={usernpass.email} onChange={handleChange} />
                        </>
                        :
                        <>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input required type="text" name="username" id="username" placeholder="Enter Username" value={usernpass.username} onChange={handleChange} />
                        </>
                }
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input required type="password" name="password" id="password" placeholder="Enter Password" value={usernpass.password} onChange={handleChange} />
                <Input type="submit" value={"Login"} />
            </FormControl>
        </Box>
    )
}