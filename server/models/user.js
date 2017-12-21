var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required:true,
    minlength:1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength:1,
    trim: true

  }, completed: {
    type: Boolean,
    default: false
  }, completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {User};
