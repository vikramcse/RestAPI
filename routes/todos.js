var express     = require('express')
    router      = express.Router()
    mongoose    = require('mongoose')
    Todo        = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
    Todo.find(function(err, todos) {
        if(err)
            return next(err);
        res.json(todos);
    });
});

router.post('/', function(req, res, next) {
    var input = req.body;
    Todo.create(input, function(err, post) {
        if(err)
            return next(err);
        res.json(post);
    });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Todo.findById(id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;