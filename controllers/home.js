/**
 * Created by gencebay
 */
module.exports = {
    index: function(req, res) {
        res.render('index', { title: 'Express Router is working for you' });
    }
};