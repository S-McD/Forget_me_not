const mongoose = require("mongoose");
const Gift = require("./gifts");

const GiftSchema = new mongoose.Schema({
    item: String,
    price: Number,
    link: String
  });
  
  const Gift = mongoose.model("Gift", GiftSchema);
  
  module.exports = Gift;
