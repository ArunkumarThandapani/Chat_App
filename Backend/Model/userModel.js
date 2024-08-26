const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Usermodel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

Usermodel.methods.matchpassword = async function (enteredpassword) {
  const cmppwd = await bcrypt.compare(enteredpassword, this.password);
  console.log(cmppwd);
  return cmppwd;
};

Usermodel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", Usermodel);
module.exports = User;
