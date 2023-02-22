const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  first_name: String,
  last_name: String,
  wishlist_IDs: Array,
  event_IDs: Array,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
