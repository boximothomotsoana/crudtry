const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 
// If you change process.env.PORT won't work on Heroku.
const writeRead = require('./routes/writeRead');
const updateDelete = require('./routes/updateDelete');
app.use('/cr', writeRead);
app.use('/ud', updateDelete);
app.use('/', function (req, res, next) {
    res.sendStatus(404);
});
app.listen(PORT, () =>
    console.log('Server running on port: ' + PORT
    ));