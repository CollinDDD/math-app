if (process.env.USER) require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./users/users.router")
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(express.json());
app.use(cors());


app.use("/", usersRouter);



app.use((req, res, next) => {
    next({status: 404, message: `Not found: ${req.originalUrl}`});
});

app.use((error, req, res, next) => {
  const {status = 500, message = "Something went wrong"} = error;
  res.status(status).json({error: message});  
});

module.exports = app;