var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Todo = new Schema({
    id: {type: Number},
    title: { type: String },
    completed: { type: Boolean }
});

module.exports = {
    Todo: mongoose.model('Todo', Todo)
};