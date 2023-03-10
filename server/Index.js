const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./Routes");
const app = express();
dotenv.config();
const corsOptions = {
<<<<<<< HEAD
origin: 'http://localhost:3000',
=======
  origin: "*",
>>>>>>> 20ab9f0b56ed483e2cd7e0563ac90185c6a017d2
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
<<<<<<< HEAD
app.use(bodyParser.json());
=======
// app.use(bodyParser.json());
>>>>>>> 20ab9f0b56ed483e2cd7e0563ac90185c6a017d2
// app.use(bodyParser.urlencoded({ extended: true }));
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
// app.options("*", cors());


const port = process.env.port;
const uri = process.env.mongo;
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const store = new MongoDBStore({
//     uri : uri,
//     collection: 'sessions'
// })
// app.use(session({secret: 'my secrett ?? ', resave :false, saveUninitialized: false, store: store}));


app.use(routes);
// const port = process.env.port;
// const uri = process.env.mongo;

mongoose
.connect(uri, () => {
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("Error :", err);
  });