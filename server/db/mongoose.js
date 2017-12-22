var mongoose = require('mongoose');
const urls = 'mongodb://tttkhai:123456@ds157653.mlab.com:57653/mgdb';

mongoose.Promise = global.Promise;
mongoose.connect(urls || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
