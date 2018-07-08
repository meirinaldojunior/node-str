'use strict'

const express = require('express');
const router = express.Router();

/**
 * Routes Index
 */
router.get("/", function (req, resp, next) {
    resp.status("200").send({
        name: "learning node.js",
        version: "0.0.1"
    });
});

module.exports = router;