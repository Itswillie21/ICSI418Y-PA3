const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// Basic route to confirm the server is running
app.get("/", function (req, res) {
    res.send("PA2 server is running");
});

// Create a new user
app.post("/signup", async function (req, res) {
    const { f_name, l_name, username, password } = req.body;

    // Make sure all signup fields are filled in
    if (!f_name || !l_name || !username || !password) {
        return res.status(400).json({
            message: "All signup fields are required."
        });
    }

    try {
        // Check for an existing username
        const existingUser = await User.findOne({ username: username });

        if (existingUser) {
            return res.status(409).json({
                message: "Username already exists."
            });
        }

        // Create and save the new user
        const newUser = new User({
            f_name: f_name,
            l_name: l_name,
            username: username,
            password: password
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully."
        });
    } catch (error) {
        console.error("Signup error:", error);

        res.status(500).json({
            message: "Server error while creating user."
        });
    }
});

// Log in an existing user
app.post("/login", async function (req, res) {
    const { username, password } = req.body;

    // Make sure both login fields are filled in
    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password are required."
        });
    }

    try {
        // Find the user by username
        const user = await User.findOne({ username: username });

        if (!user) {
            return res.status(404).json({
                message: "Username does not exist."
            });
        }

        // Compare the submitted password
        if (user.password !== password) {
            return res.status(401).json({
                message: "Incorrect password."
            });
        }

        res.status(200).json({
            message: "Login successful."
        });
    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            message: "Server error while logging in."
        });
    }
});

const PORT = 5000;

// Connect to MongoDB before starting the server
mongoose
    .connect(process.env.MONGO_URI)
    .then(function () {
        console.log("Connected to MongoDB");

        app.listen(PORT, function () {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(function (error) {
        console.error("MongoDB connection failed:", error);
    });