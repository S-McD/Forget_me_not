var mongoose = require("mongoose");

require("../mongodb_helper");
var Event = require("../../models/events");

describe("Event model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.events.drop(() => {
      done();
    });
  });

  it("has a name", () => {
    var event = new Event({name: "Zac's Birthday"});
    expect(event.name).toEqual("Zac's Birthday");
  });

  it("has a userID for invitees", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var event = new Event({invites: [mockObjectId]});
    expect(event.invites).toEqual([mockObjectId]);
  });

  it("has a userID for attendees", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var event = new Event({attendees: [mockObjectId]});
    expect(event.attendees).toEqual([mockObjectId]);
  });

  it("has a giftID for the selected gift", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var event = new Event({gift: mockObjectId});
    expect(event.gift).toEqual(mockObjectId);
  });
})
