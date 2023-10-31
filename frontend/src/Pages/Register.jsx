import { Box, Button, Flex, FormControl, FormLabel, Grid, Input, InputGroup, InputRightElement, TagLabel, Text } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signupF } from "../Redux/userReducer/action";
import "../Styles/Universal.css"

export const Register = () => {
    // User Details
    const initState = { username: "", password: "", email: "", fname: "", lname: "" };
    const [userDetails, setuserDetails] = useState(initState);

    // Show/Hide password
    const [show, setShow] = useState(false)
    const passShowHideControl = () => setShow(!show)

    // Main Functions
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signupF(userDetails));
    }
    const handleChange = (e) => {
        const obj = { ...userDetails };
        obj[e.target.name] = e.target.value;
        setuserDetails(obj);
    }

    const isAuth = useSelector(store => store.userReducer.isAuth);

    if (isAuth) {
        return <Navigate to={"/"} />
    }
    return (
        <Box className="form">
            <Text>Register</Text>
            <FormControl as={"form"} width={{'base':"90%", 'md':'50%', 'lg':'30%'}} margin={'auto'} onSubmit={handleSubmit}>
                <Grid templateColumns={"1fr 1fr"} gap={"5%"}>
                    <div>
                        <FormLabel htmlFor="fname">First Name</FormLabel>
                        <Input required type="text" name="fname" id="fname" placeholder="Enter First Name" value={userDetails.fname} onChange={handleChange} />
                    </div>
                    <div>
                        <FormLabel htmlFor="lname">Last Name</FormLabel>
                        <Input required type="text" name="lname" id="lname" placeholder="Enter Last Name" value={userDetails.lname} onChange={handleChange} />
                    </div>
                </Grid>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input required type="text" name="email" id="email" placeholder="Enter Email" value={userDetails.email} onChange={handleChange} />
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input required type="text" name="username" id="username" placeholder="Enter Username" value={userDetails.username} onChange={handleChange} />
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        name="password"
                        id="password"
                        value={userDetails.password}
                        onChange={handleChange}
                    />
                    <InputRightElement padding={"2%"}>
                        <Button size={"sm"} onClick={passShowHideControl}>
                            {show ? <ViewOffIcon /> : <ViewIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Input type="submit" value={"Register"} />
            </FormControl>
        </Box>
    )
}