var mongoose = require('mongoose');
var url = process.env.MONGOLAB_URI;


mongoose.Promise = global.Promise;
mongoose.connect(urls || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
