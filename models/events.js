const mongoose = require("mongoose");
const User = require("./users");

const EventSchema = new mongoose.Schema({
    name: String, 
    date: Date,
    invites: [{type: mongoose.Types.ObjectId, ref: "Request"}],
    attendees: [{type: mongoose.Types.ObjectId, ref: "User"}],
    gift: {type: mongoose.Types.ObjectId, ref: "Gift"},
  });
  
  const Event = mongoose.model("Event", EventSchema);
  
  module.exports = Event;
