/**
 * Created by gencebay
 */
var home = require('../controllers/home'),
    todo = require('../controllers/todo'),
    test = require('../controllers/test')

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/test', test.index);
    app.get('/api/todos', todo.index);
    app.get('/api/todos/:id', todo.getById);
    app.post('/api/todos', todo.add);
    app.put('/api/todos/:id', todo.put);
};