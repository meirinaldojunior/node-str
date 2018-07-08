'use strict'

/**
 * Routes Products
 */
const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.get("/", controller.get);
router.get("/slug/:slug", controller.getBySlug);
router.get("/id/:id", controller.getById);
router.get("/tag/:tag", controller.getByTags);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;