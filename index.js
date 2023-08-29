//Import Express
const express = require('express')
const app = express()

//Import the main Passport and Express-Session library
const passport = require('passport')
const session = require('express-session')

//Import the secondary "Strategy" library
const LocalStrategy = require('passport-local').Strategy


// In this example we will use the "local" strategy


