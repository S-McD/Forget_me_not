var mongoose = require("mongoose");

require("../mongodb_helper");
var User = require("../../models/users");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    var user = new User({email: "test@gmail.com"});
    expect(user.email).toEqual("test@gmail.com");
  });

  it("has a password", () => {
    var user = new User({password: "password"});
    expect(user.password).toEqual("password");
  });

  it("has a first name", () => {
    var user = new User({first_name: "Simone"});
    expect(user.first_name).toEqual("Simone");
  });

  it("has a last name", () => {
    var user = new User({last_name: "McDonald"});
    expect(user.last_name).toEqual("McDonald");
  });

  it("has a wishlist_id for each wishlist the user has created", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var user = new User({wishlist_IDs: [mockObjectId]});
    expect(user.wishlist_IDs).toEqual([mockObjectId]);
  });

  it("has a event_id for each event the user has created", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var user = new User({event_IDs: [mockObjectId]});
    expect(user.event_IDs).toEqual([mockObjectId]);
  });
})
