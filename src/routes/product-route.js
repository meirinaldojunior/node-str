'use strict'

const express = require('express');
const router = express.Router();

router.post("/", function (req, resp, next) {
    resp.status(201).send(req.body);
});

router.put("/:id", function(req, resp, next) {
  const id = req.params.id;
  resp.status(201).send({
    id: id,
    item: req.body
  });
});

router.delete("/:id", function(req, respo, next) {
  respo.status(200).send(req.body);
});

module.exports = router;