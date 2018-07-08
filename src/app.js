"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

/**
 * Connect mongodb with mongoose
 * 
 * Ps: For connect in mongodb with mongoose is necessary export in 
 * environment variable the parameter the URL_MONGO
 * containts username and password,
 * example: mongodb://user:pass@hostmongo.com:port/databasename
 */
mongoose.connect(process.env.URL_MONGO);

/**
 * Middlwares routes
 */
app.use(bodyParser.json()); //faz um parse do conteúdo recebido para torna-lo json
app.use(bodyParser.urlencoded({ extended: false })); //codifica URL para aceitar caracteres especiais

/**
 * Call models
 */
const Product = require("./models/product");

/**
 * Loading routes
 */
const indexRoute = require('./routes/index-route');
app.use("/", indexRoute);
const productRoute = require('./routes/product-route');
app.use("/products", productRoute);

module.exports = app;
