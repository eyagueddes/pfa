const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
<<<<<<< HEAD
  isAdmin: {
    type: Boolean,
    default: false
  },
=======
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);
