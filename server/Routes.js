const express = require("express");
const route = express.Router();

const {createAccount} = require('./Controller/account');
const { createProject, fillDB } = require("./Controller/project");

route.post('/createAccount', createAccount);
route.post('/createProject', createProject);
route.post('/fillDB', fillDB);

module.exports = route