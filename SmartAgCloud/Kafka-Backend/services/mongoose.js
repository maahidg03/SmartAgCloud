//Might not even need it. Slight confusion. Leave it untouched for the present

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://sarang4488:partner123@ds141514.mlab.com:41514/linkedin",
  { useNewUrlParser: true }
);

const options = {
  poolSize: 1000
};
//Can be modified according to our user
var Users = mongoose.model("Users", {
  firstName: {
    type: String,
    default: "firstname"
  },
  lastName: {
    type: String,
    default: "lasttname"
  },
  type: {
    type: String,
    default: "type"
  },
  phone: {
    type: String,
    default: "xxx-xxx-xxxx"
  },
  address: {
    type: String,
    default: "address"
  },
  city: {
    type: String,
    default: "city"
  },
  state: {
    type: String,
    default: "state"
  },
  zipcode: {
    type: String,
    default: "zipcode"
  },
  country: {
    type: String,
    default: "country"
  },
  experience: {
    type: String,
    default: "experience"
  },
  education: {
    type: String,
    default: "education"
  },
  skills: {
    type: String,
    default: "skills"
  },
  headline: {
    type: String,
    default: "headline"
  },
  locationNearby: {
    type: String
  },
  industry: {
    type: String,
    default: "Computer Software"
  },
  phoneType: {
    type: String,
    default: "WORK"
  },
  profileSummary: {
    type: String,
    default: "profileSummary"
  },
  profileCounts: [
    {
      date: {
        type: Date,
        unique: true,
        default: Date()
      },
      clicks: {
        type: Number,
        default: 0
      }
    }
  ],
  clickCounts: {
    type: Number,
    default: 0
  },
  // clickDate: {
  //   type: Date,
  //   default: Date()
  // },
  resume: {
    type: String,
    default: "resume"
  },
  gender: {
    type: String,
    default: "gender"
  },
  img: {
    type: String,
    default: "image"
  },
  connectionRequests: [String],
  connections: [String],
  savedJobs: [String],
  appliedJobs: {
    type: [String]
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String
  },
  companyName: {
    type: String,
    default: "Company Name"
  }
});
module.exports = { Users };
