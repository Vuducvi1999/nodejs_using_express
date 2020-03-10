var db = require('../get_db');
const shortid = require('shortid');

module.exports.homeGet = (req, res) => {
    res.render('create');
};

module.exports.homePost = (req, res) => {
    req.body.id = shortid.generate();
    db.get('listUsers').push(req.body).write();
    res.redirect('/');
};