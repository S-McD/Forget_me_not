const mongoose = require("mongoose");

const GiftSchema = new mongoose.Schema({
  item: String,
  price: Number,
  link: String,
  isGift: Boolean
  });
  
const Gift = mongoose.model("Gift", GiftSchema);

module.exports = Gift;
