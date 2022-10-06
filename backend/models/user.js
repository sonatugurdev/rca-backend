const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subscriptionType: {
    type: String,
  }
})

exports.User = mongoose.model('RCAUsers',userSchema);
exports.userSchema = userSchema;
