
var models = require('../app/models'),
    md5 = require('MD5');

module.exports = {
    index: function(req, res) {
        models.Todo.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Todo.find({ _id: req.params.id }, function(err, todo) {
            if (err) {
                res.json({error: 'Todo not found.'});
            } else {
                res.json(todo[0]);
            }
        });
    },
    add: function(req, res) {
        var newTodo = new models.Todo(req.body);
        newTodo.save(function(err, todo) {
            if (err) {
                res.json({error: 'Error adding todo.'});
            } else {
                res.json(todo);
            }
        });
    },
    put: function(req, res) {
        console.log(req.body);
        models.Todo.update({ _id: req.body.id }, req.body, function(err, updated) {
            if (err) {
                res.json({error: err});
            } else {
                res.json(updated);
            }
        })
    },
    delete: function(req, res) {
        models.Todo.findOne({ _id: req.params.id }, function(err, todo) {
            if (err) {
                res.json({error: 'Todo not found.'});
            } else {
                todo.remove(function(err, todo){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }
};