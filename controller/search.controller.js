var db = require('../get_db');

module.exports.homeGet = (req, res) => {
    let name = req.query.name;
    let matched = db.get('listUsers').value().filter((item) => {
        return item.name.indexOf(name) !== -1;
    });
    res.render('user', {
        list: matched
    });
};