"use stricts";

const mongoose = require("mongoose");
const Product = mongoose.model("Product");

/**
 * Controller Products
 */

exports.get = (req, resp, next) => {
  Product.find({ active: true }, "title price slug")
    .then(result => {
      resp.status(200).send({ result });
    })
    .catch(err => {
      resp.status(400).send({ err });
    });
};

exports.getBySlug = (req, resp, next) => {
    Product.findOne({ slug: req.params.slug , active: true }, "title price slug tags")
        .then(result => {
            resp.status(200).send({ result });
        })
        .catch(err => {
            resp.status(400).send({ err });
        });
};

exports.getById = (req, resp, next) => {
    Product.findById(req.params.id, "title price slug tags")
        .then(result => {
            resp.status(200).send({ result });
        })
        .catch(err => {
            resp.status(400).send({ err });
        });
};

exports.getByTags = (req, resp, next) => {
  Product.find({tags: req.params.tag, active: true}, "title price slug tags")
    .then(result => {
      resp.status(200).send({ result });
    })
    .catch(err => {
      resp.status(400).send({ err });
    });
};

exports.post = (req, resp, next) => {
  var product = new Product(req.body);
  product
    .save()
    .then(result => {
      resp.status(201).send({ message: "Produto cadastrado com sucesso.." });
    })
    .catch(err => {
      resp.status(400).send({ message: "Falha ao cadastrar", data: err });
    });
};

exports.put = (req, resp, next) => {
  const id = req.params.id;
  resp.status(201).send({
    id: id,
    item: req.body
  });
};

exports.delete = (req, respo, next) => {
  respo.status(200).send(req.body);
};
