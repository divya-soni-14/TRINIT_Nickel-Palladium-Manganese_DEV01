const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  posts: [String],
  type: {
    type : String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  by: {
    type: mongoose.Types.ObjectId,
  },
  target: {
    type: Number,
    required : true
  },
  total_raised : {
    type : Number,
    default : 0
  },
  dp : {
    type : String,
    default : 'https://www.designmantic.com/logo-images/172807.png?company=REPLACE&slogan=&verify=1'
  }, 
  supporting_images: [String], 
  supporting_docs: [String]
});

module.exports = mongoose.model('Project', projectSchema);
