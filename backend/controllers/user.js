const User = require("../models/user");
const { setUser, getUser } = require("../service/auth");

async function handleCreateNewUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    const result = await User.create({
        firstName,
        lastName,
        email,
        password,
    })
    return res.status(201).json({ msg: "success" })
}

async function handleAuthenticateUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ msg: "Invalid email or password" });
        }
        const token = setUser(user);
        res.cookie("uid", token);
        return res.status(200).json({ msg: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = {
    handleCreateNewUser,
    handleAuthenticateUser,
}