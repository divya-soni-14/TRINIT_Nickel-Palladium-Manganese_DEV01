const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Routes');
const app = express();
dotenv.config();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
// const corsConfig = {
//     credentials: true,
//     origin: true,
// };
//   app.use(cors(corsConfig));
// const corsOpts = {
//     origin: '*',
//     credentials: true,
//     methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
//     allowedHeaders: ['Content-Type'],
//     exposedHeaders: ['Content-Type']
// };
// app.use(cors(corsOpts));
app.options('*',cors())
const port = process.env.port;
const uri = process.env.mongo;
mongoose.connect(uri,
    () => {
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        }) 
    }    
).catch(err => {console.log("Error : ", err)});
