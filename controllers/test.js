module.exports = {
    index: function(req, res) {
        res.render('test', {title: 'Test', layout: false});
    }
}