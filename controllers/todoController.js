const db = require("../models");

// Defining methods for todoController
module.exports = {
    findAll: function (req, res) {
        db.ToDo
            .find({}) //mongoose function
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    findById: function (req, res) {
        db.ToDo
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    create: function (req, res) {
        db.ToDo
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    update: function (req, res) {
        db.ToDo
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    remove: function (req, res) {
        db.ToDo
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
};