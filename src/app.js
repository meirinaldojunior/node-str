"use strict";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//cria especie de middlware para transformar conteudo recebido em json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //encodificar URLS

//carrega rotas
const indexRoute = require('./routes/index-route');
app.use("/", indexRoute);

const productRoute = require('./routes/product-route');
app.use("/products", productRoute);

module.exports = app;
