const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

// ✅ Prevent OverwriteModelError by checking if it already exists
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
