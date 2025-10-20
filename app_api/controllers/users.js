// Import the model instead of redefining it
const User = require("../models/user");

// GET method
const listusers = async (req, res) => {
  console.log(req.body);
  const users = await User.find();
  res.send({ message: users });
};

// POST method
const createUsers = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const users = await User.create({ name, email, password });
  res.send({ message: users });
};

module.exports = { listusers, createUsers };
