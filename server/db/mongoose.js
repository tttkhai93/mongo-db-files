var mongoose = require('mongoose');
var url = process.env.MONGOLAB_URI;


mongoose.Promise = global.Promise;
mongoose.connect(url || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
