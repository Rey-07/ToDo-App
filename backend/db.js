const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://tripathirey07:gVKKua01qNzlblAb@cluster0.rid3vgi.mongodb.net/todo"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
