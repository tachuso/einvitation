//initializes
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

//app
const app = express();

//port
const port = 6400;

//routes

const guestRoute = require("./routes/guest");
const homeRoute = require("./routes/home");

//middleware
app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.disable("view cache");


app.use("/api/guests", guestRoute);
//app.use("/", homeRoute);

app.use("/", (req,res) => {res.sendFile(path.join(__dirname, "./public/index.html"))});

//mongoose
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(process.env.DB_STRING, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT || port, () => {
      console.log("app running on port", process.env.PORT || port);
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
