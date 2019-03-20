//No change right now. Will need to update the mlab config
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://sarang4488:partner123@ds141514.mlab.com:41514/linkedin",
  { useNewUrlParser: true }
);

console.log("Database Connected mongo");

module.exports = { mongoose };
