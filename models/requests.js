const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  creator: {type: mongoose.Types.ObjectId, ref: "User"},
  recipient: {type: mongoose.Types.ObjectId, ref: "User"},
  event: {type: mongoose.Types.ObjectId, ref: "Event"},
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending"},
});
  
const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
