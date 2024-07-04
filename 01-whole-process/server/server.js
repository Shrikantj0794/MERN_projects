require("dotenv").config();
const express = require("express")
const app = express();
const authRoute = require("./router/auth-router");
const conatctRoute = require('./router/contact-router')
const connectionDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

app.use(express.json());
// this line of code adds express.middleware that parses incoming request bodies with JSON payloads its important to place this before any routes that need to handle JSON data in the request body.

// use router in server.js
app.use("/api", authRoute);
app.use("/api/form", conatctRoute);

// import error middleware
app.use(errorMiddleware);

connectionDb().then(()=>{
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("server is runing");
});
})

// maintain clean and less code 