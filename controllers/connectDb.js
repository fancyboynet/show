var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/show', {
    user: 'admin',
    pass: 'admin'
});
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', console.log.bind(console, 'connection success:'));