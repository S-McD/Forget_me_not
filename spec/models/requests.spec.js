var mongoose = require("mongoose");

require("../mongodb_helper");
var Request = require("../../models/requests");

describe("Request model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.requests.drop(() => {
      done();
    });
  });

  it("has the creator id", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var request = new Request({creator: mockObjectId});
    expect(request.creator).toEqual(mockObjectId);
  });

  it("has the recipient id", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var request = new Request({recipient: mockObjectId});
    expect(request.recipient).toEqual(mockObjectId);
  });

  it("has the event id", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var request = new Request({event: mockObjectId});
    expect(request.event).toEqual(mockObjectId);
  });

  it("has the status of the request", () => {
    var request = new Request({status: 'pending'});
    expect(request.status).toEqual('pending');
  });
})