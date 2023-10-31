const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/userModel");

const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
    try {
        let data = await userModel.find();
        res.status(200).send({ msg: "success", data });
    } catch (e) {
        res.send({ msg: "something went wrong", error: e.message });
    }
})

userRoutes.post("/register", async (req, res) => {
    const { fname, lname, email, username, password } = req.body;
    if (!fname || !lname || !email || !username || !password) {
        res.status(400).send({ msg: "invalid data format" });
    } else {
        try {
            const userCheck = await userModel.findOne({ username });
            const emailCheck = await userModel.findOne({ email });
            if (userCheck || emailCheck) {
                res.status(400).send({ msg: `${userCheck && "username" || ""}${userCheck && emailCheck && " &" || ""}${emailCheck && ' email' || ""} already registered` });
            } else {
                const encrypted = bcrypt.hashSync(password, 5);
                const newUser = new userModel({ fname, lname, email, username, password: encrypted });
                await newUser.save();
                res.status(200).send({ msg: "new user created" });
            }
        } catch (e) {
            res.send({ msg: "something went wrong", error: e.message });
        }
    }
})

userRoutes.post("/login", async (req, res) => {
    const { email, username, password } = req.body;
    if ((username && password) || (email && password)) {
        try {
            const user = await userModel.findOne({ $or: [{ username }, { email }] });
            console.log(user)
            if (!user) {
                res.status(400).send({ msg: "user not present" });
            } else {
                const comparision = bcrypt.compareSync(password, user.password);
                if (comparision) {
                    const token = jwt.sign({ uid: user._id }, "secret_appKey");
                    res.status(200).send({ msg: "logged in", token })
                } else {
                    res.status(400).send({ msg: "incorrect password" });
                }
            }
        } catch (e) {
            console.log(e);
            res.status(400).send({ msg: "something went wrong", error: e.message });
        }
    } else {
        res.status(400).send({ msg: "invalid data format" });
    }
})

module.exports = { userRoutes };