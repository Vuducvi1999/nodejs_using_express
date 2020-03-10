const express = require('express');
const app = express();
const port = 3000;

const db = require('./get_db');
const createRoute = require('./routes/create.route');
const userRoute = require('./routes/user.route');
const searchRoute = require('./routes/search.route');

//thiết lập thư mục chứa template
app.set('views', './views');
// thiết lập engine sử dụng
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.listen(port, function () {
  console.log('kết nối thành công đến port ' + port);
});

app.get('/', function (req, res) {
  res.render('home');
});

app.use('/search', searchRoute);

app.use('/create', createRoute);
app.use('/user', userRoute);