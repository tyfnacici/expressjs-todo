const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "you have to provide the name"],
    trim: true,
    maxlength: [20, "20 karakterden fazla giriş yapılamaz"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
