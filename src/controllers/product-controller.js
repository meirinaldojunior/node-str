'use stricts'

exports.post = (req, resp, next) => {
    resp.status(201).send(req.body);
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
}