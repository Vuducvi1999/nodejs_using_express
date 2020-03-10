var db = require('../get_db');

module.exports.homeGet = function (req, res) {
    res.render('user', {
        list: db.get('listUsers').value()
    });
};

module.exports.homeSearch = (req, res) => {
    let id = req.params.id;
    console.log(id);
    let findUser = db.get('listUsers').find({ id: id }).value();
    res.render('view', {
        user: findUser
    })
};