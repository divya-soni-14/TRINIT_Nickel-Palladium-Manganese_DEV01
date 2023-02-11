const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ngoSchema = new Schema({
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
  website: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required : true
  },
  posts: [String],
  projects: [String],
  project_leaders: [String],
  total_raised : {
    type : Number,
    default : 0
  },
  dp : {
    type : String,
    default : 'https://www.designmantic.com/logo-images/166751.png?company=REPLACE&slogan=&verify=1'
  },
  payment_details: {
    type: String,
    default : 'UPI : XYZ@UPI'
  }
});

module.exports = mongoose.model('NGO', ngoSchema);
