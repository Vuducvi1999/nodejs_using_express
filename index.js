const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log('kết nối thành công đến port ' + port);
});

app.get('/', function (req, res) {
    res.send('hello world');
})