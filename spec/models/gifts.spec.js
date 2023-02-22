var mongoose = require("mongoose");

require("../mongodb_helper");
var Gift = require("../../models/gifts");

describe("Gift model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.gifts.drop(() => {
      done();
    });
  });

  it("has the name of the item", () => {
    var gift = new Gift({item: "Air Fryer"});
    expect(gift.item).toEqual("Air Fryer");
  });

  it("has the price of the item", () => {
    var gift = new Gift({price: 99.99});
    expect(gift.price).toEqual(99.99);
  });

  it("has the link of the item", () => {
    let url = 'https://www.amazon.co.uk/Tower-T17076-Digital-Circulation-60-Minute/dp/B09CDT23ZV?pd_rd_w=QboxH&content-id=amzn1.sym.e9c30756-181a-4068-ac3a-74afd7f110a2&pf_rd_p=e9c30756-181a-4068-ac3a-74afd7f110a2&pf_rd_r=VBHZ7ANWQHQTH6SNSPHW&pd_rd_wg=4HChQ&pd_rd_r=71bda3af-0e7d-4e31-af06-c7fee3829b5f&pd_rd_i=B09CDT23ZV&psc=1&ref_=pd_bap_d_grid_rp_0_1_i'
    var gift = new Gift({link: url });
    expect(gift.link).toEqual(url);
  });
})