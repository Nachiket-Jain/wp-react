const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserSchemaModel = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://jainnachiket0305:Nachiket3@wp.ew4tu.mongodb.net/Sportify"
);
//mongoose.connect(db="Sportify",username="jainnachiket0305",password="Nachiket3",host="mongodb+srv://jainnachiket0305:Nachiket3@wp.ew4tu.mongodb.net/Sportify")
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserSchemaModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({message: "Login Successful"});
      } else {
        res.json({message: "Password incorrect"});
      }
    } else {
      res.json("User not found");
    }
  });
});

app.post("/register", (req, res) => {
  UserSchemaModel.create(req.body)
    // POST, it will return you the same object in the response if it is created successfully, otherwise it will return an error message
    // json: { name: "John Doe", email: "}
    .then((users) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
