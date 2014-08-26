var mongoose = require('mongoose');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/admin', {
    user: 'admin',
    pass: 'admin'
});
//mongoose.connect('mongodb://root:admin@localhost:27107/admin');
db.on('error', console.error.bind(console, 'connection error:'));