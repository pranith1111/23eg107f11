const mongoose = require("mongoose");

const dbURI = "mongodb://127.0.0.1:27017/myDatabase"; // you can name your DB anything
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Optional: just for logging
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + dbURI);
});

// Register all models here 👇
require("./user"); // This line is what makes "User" model available globally
