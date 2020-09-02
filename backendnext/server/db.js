const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/imw_shop");

const userSchema = new mongoose.Schema({
    uid: String,
    email: String,
    name: String,
    picture: String
});

const user = mongoose.model('user', userSchema, 'users');
module.exports = user;
