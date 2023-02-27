const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String, 
  date: Date,
  invites: [{type: mongoose.Types.ObjectId, ref: "User"}],
  attendees: [{type: mongoose.Types.ObjectId, ref: "User"}],
  gift: {type: mongoose.Types.ObjectId, ref: "Gift"},
  creator: {type: mongoose.Types.ObjectId, ref: "User"},
});
  
const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
