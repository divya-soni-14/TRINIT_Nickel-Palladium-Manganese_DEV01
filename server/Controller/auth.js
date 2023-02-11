const Account = require('../Model/Account');
const User = require('../Model/User');
const NGO = require('../Model/NGO');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

exports.login = async (req, res) => {
    Account.findOne({ email: req.body.email }).then((account) => {
        if (!account)
            return res.status(200).json({ success: false, message: "Invalid Credential" });

        bcrypt.compare(req.body.password, account.password).then(doMatch => {
            if (!doMatch)
                return res.status(200).json({ success: false, message: "Invalid Credential" });
            res.status(200).json({success:true, id:account._id.toString()});
        })
    }).catch(error => {
        return res.status(200).json({ success: false, message: error });
    })
}

exports.isSignedIn = async (req, res) => {
    console.log(req.body.token);
    if (req.body.token) {
        const finder = mongoose.Types.ObjectId(req.body.token);
        Account.findOne({ _id: finder }).then((account) => {
            if(!account){
                return res.status(200).json({ isLoggedIn: false });
            }
            if (account.type == 'user') {
                User.findOne({ _id: mongoose.Types.ObjectId(account.id) }).then(user => {
                    return res.status(200).json({ isLoggedIn: true, type: 'user', account: user });
                })
            } else {
                NGO.findOne({ _id: mongoose.Types.ObjectId(account.id) }).then(ngo => {
                    return res.status(200).json({ isLoggedIn: true, type: 'ngo', account: ngo });
                })
            }
        })
    } else {
        return res.status(200).json({ isLoggedIn: false });
    }
}
