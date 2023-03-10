const express = require("express");
const route = express.Router();

const {createAccount, getAccounts} = require('./Controller/account');
const { login, isSignedIn } = require("./Controller/auth");
const { createProject } = require("./Controller/project");

route.post('/createAccount', createAccount);
route.post('/createProject', createProject);
route.get('/getAccounts', getAccounts);
route.post('/login', login);
route.post('/isSignedIn', isSignedIn)
const { createAccount, getAccounts } = require("./Controller/account");
const { createProject, getAllProjects } = require("./Controller/project");

route.get("/getAccounts", getAccounts);
route.get("/getAllProjects", getAllProjects);
// route.post('/fillDB', fillDB);

module.exports = route;
