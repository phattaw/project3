const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Tiles collection and inserts the tiles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const rolls = [{roll: 0}];


db.Roll
  .remove({})
  .then(() => db.Roll.insertMany(rolls))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
