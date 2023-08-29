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







app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(process.env.PORT);
