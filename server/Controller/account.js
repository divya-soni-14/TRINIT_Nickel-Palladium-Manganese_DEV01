const Account = require('../Model/Account');
const User = require('../Model/User');
const NGO = require('../Model/NGO');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const createUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            contact: req.body.contact,
        });
        if (req.dp)
            user.dp = req.dp;
        try {
            await user.save();
            return {
                success: true,
                account: user
            }
        } catch (err) {
            return {
                success: false,
                message: err
            }
        }
    } catch (err) {
        return {
            success: false,
            message: err
        }
    }
}

const createNGO = async (req, res) => {
    try {
        const ngo = new NGO({
            name: req.body.name,
            description: req.body.description,
            address: req.body.address,
            contact: req.body.contact,
        });
        if (req.dp)
            ngo.dp = req.dp;
        else{
                let newString = req.body.name.replace(/\s+/g,' ').trim();
                let finalString = newString.split(' ').join('+');
                const url = 'https://www.designmantic.com/logo-images/166751.png?company=REPLACE&slogan=&verify=1';
                ngo.dp = url.replace('REPLACE',finalString);
            }
        if (req.website)
            ngo.website = req.website;
        try {
            await ngo.save();
            return {
                success: true,
                account: ngo
            }
        } catch (err) {
            return {
                success: false,
                message: err
            }
        }
    } catch (err) {
        return {
            success: false,
            message: err
        }
    }
}

exports.createAccount = async (req, res) => {
        const hasher = async() => {
            return await bcrypt.hash(req.body.password,12);
        }
        Account.findOne({email:req.body.email})
        .then(account => {
            if(account)
                throw("Email Taken");
        }).then(() => {
            return req.body.type == 'user' ? createUser(req, res) : createNGO(req,res);
        }).then(async (response) => {
            return hasher().then((hashedPassword) => {
                let account = new Account({
                    email: req.body.email,
                    password: hashedPassword,
                    type: req.body.type,
                    id : response.account._id 
                });
                return account.save();
            })
        }).then((account) => {
            console.log(account);
            const finder = mongoose.Types.ObjectId(account.id);
            if(account.type == 'user')
                // User.updateOne({_id:finder},{ $set: {accountId:account._id} }, (error) => {
                //     if (error) {
                //         console.error(error);
                //     } else {
                //         console.log("User successfully updated!");
                //     }});
                {
                    User.findOne({_id:finder}, (err,user) => {
                        console.log(user);
                        user.accountId = account._id;
                        user.save();
                    })
                }
            else
                // NGO.updateOne({_id:finder},{ $set: {accountId:account._id} }, (error) => {
                //     if (error) {
                //         console.error(error);
                //     } else {
                //         console.log("ngo successfully updated!");
                //     }});
                {
                    NGO.findOne({_id:finder}, (err,ngo) => {
                        console.log(ngo);
                        ngo.accountId = account._id;
                        ngo.save();
                    })
                }
            return account;
        }).then((final) => {
            res.status(200).json({success: true, account : final});
        })
    .catch((err) => {
        res.status(450).json({
            success: false,
            message: err === "Email Taken" ? "Email address already in use" : "Error creating account",
        });
    });
}
