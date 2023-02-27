const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
  name: String,
  members: [{type: mongoose.Types.ObjectId, ref: "User"}],
  gifts: [{type: mongoose.Types.ObjectId, ref: "Gift"}],
  creator: {type: mongoose.Types.ObjectId, ref: "User"},
});
  
const Wishlist = mongoose.model("wishlists", WishlistSchema);
  
module.exports = Wishlist;
