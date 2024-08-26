const asynchandler = require("express-async-handler");
const User = require("../Model/userModel");
const generatetoken = require("../config/gererateToken");

const registerUser = asynchandler(async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const userexist = await User.findOne({ email });
  if (userexist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generatetoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create User");
  }
});

const authUser = asynchandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const userexist = await User.findOne({ email });
    if (userexist && (await userexist.matchpassword(password))) {
      res.json({
        _id: User._id,
        name: User.name,
        email: User.email,
        pic: User.pic,
        token: generatetoken(User._id),
      });
    } else {
      throw new Error("Invalid User");
    }
  } catch (error) {
    res.status(401).send({ Error: error });
  }
});

module.exports = { registerUser, authUser };
