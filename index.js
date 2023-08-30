//Import Express
const express = require('express')
const app = express()

//import dotenv file
require("dotenv").config();
//Import the main Passport and Express-Session library
const passport = require('passport')
const session = require('express-session')

// In this example we will use the "local" strategy
const LocalStrategy = require('passport-local').Strategy

//import dotenv file
const main = require("./routes/main");

const bodyParser = require("body-parser");
const path = require("path");


// define middleware & public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.json());




// Accessing Routes
app.get("/", main.loginPage);
app.post("/dashboard", main.dashboard);



app.listen(process.env.PORT);
