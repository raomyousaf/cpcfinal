//Import Express
const express = require('express')
const app = express()

//import dotenv file
require("dotenv").config();
//Import the main Passport and Express-Session library
const passport = require('passport')
const session = require('express-session')

//Import the secondary "Strategy" library
const LocalStrategy = require('passport-local').Strategy
// In this example we will use the "local" strategy


const bodyParser = require("body-parser");
const path = require("path");

//// define middleware & public folder
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.json());





app.get('/', (req, res) => {
   res.render("./login"); 
   console.log("test");
  })
  
  app.post("/dashboard", (req, res) => {
    res.render("Dashboard");
  });



app.listen(process.env.PORT);
