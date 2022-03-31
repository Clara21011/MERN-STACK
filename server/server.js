const express = require("express");
const bcrypt = require ("bcryptjs");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const app = express();

//DB
dbConnect();

//Middleware
app.use(express.json());

//Users route
app.use('/api/users', userRoutes);

//err hanlder
app.use(notFound);
app.use(errorHandler);

// Login
app.post("/api/users/login", (req, res) => {
    // business logic
    res.json({user: 'User Login'});
});

// fetch all users
app.post("/api/users", (req, res) => {
    // business logic
    res.json({user: 'fetch all users'});
});

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));