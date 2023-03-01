const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String, 
  date: Date,
  description: String,
  invites: [{type: mongoose.Types.ObjectId, ref: "User"}],
  attendees: [{type: mongoose.Types.ObjectId, ref: "User"}],
  declines: [{type: mongoose.Types.ObjectId, ref: "User"}],
  gift: {type: mongoose.Types.ObjectId, ref: "Gift"},
  creator: {type: mongoose.Types.ObjectId, ref: "User"},
});
  
const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
