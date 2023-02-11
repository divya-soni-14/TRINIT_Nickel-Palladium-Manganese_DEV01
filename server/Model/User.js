const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  accountId: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required : true
  },
  projects: [String],
  total_donated : {
    type : Number,
    default : 0
  },
  donations : {
    type : Array,
    default : []
  },
  dp : {
    type : String,
    default : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'
  }
});

module.exports = mongoose.model('User', userSchema);
