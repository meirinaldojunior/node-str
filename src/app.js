"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/**
 * Middlwares routes
 */
app.use(bodyParser.json()); //faz um parse do conteúdo recebido para torna-lo json
app.use(bodyParser.urlencoded({ extended: false })); //codifica URL para aceitar caracteres especiais

/**
 * Loading routes
 */
const indexRoute = require('./routes/index-route');
app.use("/", indexRoute);
const productRoute = require('./routes/product-route');
app.use("/products", productRoute);

module.exports = app;
