const mongoose = require("mongoose");
const Gift = require("./gifts");

const GiftSchema = new mongoose.Schema({
    item: String,
    price: Number,
    wishlist_id: {type: mongoose.Types.ObjectId, ref: "Wishlist"}
  });
  
  const Gift = mongoose.model("Gift", GiftSchema);
  
  module.exports = Gift;
