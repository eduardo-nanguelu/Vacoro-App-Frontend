// Paquetes Requeridos
const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config()

//configurando las rutas
const routes = require('./api/routes/home') // incluye la ruta authors.js file

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/front");

//Middlewares
app.use(express.json()) // we need to tell server to use json as well
app.use(routes) // tells the server to use the routes in routes.js
app.use(express.static(path.join(__dirname+ "/front")));

module.exports = app;