// Imports for application
const express = require("express");
const { dbConnection } = require("./db/db");
const { userRoutes } = require("./routes/userRoutes");
const { userCheck } = require("./middleware/authorization");
const cors = require("cors");
require("dotenv").config();


// Express app
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({ msg: "Home page of API" })
})

app.use("/user", userRoutes);
app.use(userCheck);

app.listen(process.env.port, async () => {
    try {
        await dbConnection;
        console.log("Database connection established");
        console.log(`Server is live at port ${process.env.port}`);
    } catch (error) {
        console.log(error.message);
    }
})