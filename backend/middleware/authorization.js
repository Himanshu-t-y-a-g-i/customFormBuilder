const jwt = require("jsonwebtoken");

const userCheck = (req, res, next) => {
    const token = req.headers.token || "";
    if (!token) {
        res.status(401).send({ msg: "login required" });
        return;
    }
    try {
        const verify = jwt.verify(token, "secret_appKey");
        req.body.uid = verify.uid;
        next();
    } catch (e) {
        res.status(400).send({ msg: "something went wrong", error: e.message });
    }
}

module.exports = { userCheck };