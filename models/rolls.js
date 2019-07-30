const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rollsSchema = new Schema({
  roll: {type: Number, require: true },
  date: { type: Date, default: Date.now }
});

const Rolls = mongoose.model("Rolls", rollsSchema);

module.exports = Rolls;