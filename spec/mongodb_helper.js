var mongoose = require("mongoose");
// mongoose.set('strictQuery', false);

beforeAll(function (done) {
  mongoose.connect("mongodb://0.0.0.0/forget-me-not", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
