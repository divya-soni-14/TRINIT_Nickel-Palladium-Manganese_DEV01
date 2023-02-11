var mongoose = require('mongoose');

var accountSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password : {
            type: String,
            required : true
        },
        type : {
            type : String,
            required : true
        },
        id : {
            type : String
        }
    }
)

module.exports = mongoose.model('Account', accountSchema);

