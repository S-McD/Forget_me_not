var mongoose = require("mongoose");

require("../mongodb_helper");
var Wishlist = require("../../models/wishlists");

describe("Wishlist model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.wishlists.drop(() => {
      done();
    });
  });

  it("has a name", () => {
    var wishlist = new Wishlist({name: "Zac's birthday"});
    expect(wishlist.name).toEqual("Zac's birthday");
  });

  it("has a user_id for each member of the wishlist", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var wishlist = new Wishlist({members: [mockObjectId]});
    expect(wishlist.members).toEqual([mockObjectId]);
  });

  it("has a gift_id for the gift selected for the request", () => {
    const mockObjectId = new mongoose.Types.ObjectId();
    var wishlist = new Wishlist({gifts: [mockObjectId]});
    expect(wishlist.gifts).toEqual([mockObjectId]);
  });
})
