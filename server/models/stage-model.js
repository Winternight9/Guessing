const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Stage = new Schema(
  {
    answer: [String]
    }
);

module.exports = mongoose.model("stages", Stage);
