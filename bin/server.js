'use strict'

const app = require('../src/app');
const http = require('http');
const debug = require("debug");
const normalizePort = require('normalize-port')

//cria servidor
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
http.createServer(app).listen(port, function (params) {
    console.log('servidor rodando na porta: ' + port);
})

