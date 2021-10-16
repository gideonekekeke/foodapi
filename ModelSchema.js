const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("food", mySchema);
