const mongoose = require("mongoose");
const Request = require("./requests");

const RequestSchema = new mongoose.Schema({
    creator: {type: mongoose.Types.ObjectId, ref: "User"},
    recipient: {type: mongoose.Types.ObjectId, ref: "User"},
    event: {type: mongoose.Types.ObjectId, ref: "Event"},
    status: String,
  });
  
  const Event = mongoose.model("Request", RequestSchema);
  
  module.exports = Request;
