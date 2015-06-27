/**
 * Created by gencebay
 */
var home = require('../controllers/home'),
    todos = require('../controllers/todos'),
    test = require('../controllers/test')

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/test', test.index);
    app.get('/api/todos', todos.index);
    app.get('/api/todos/:id', todos.getById);
    app.post('/api/todos', todos.add);
    app.put('/api/todos/:id', todos.put);
};