const mongoose = require("mongoose");

const BlogModel = new mongoose.Schema({
  author: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: [String], required: true },
  category: { type: mongoose.Types.ObjectId, required: true },
  comment: { type: [], default: [] },
  like: { type: [mongoose.Types.ObjectId], default: [] },
  deslike: { type: [mongoose.Types.ObjectId], default: [] },
  bookmark: { type: [mongoose.Types.ObjectId], default: [] },
});

module.exports = {
  BlogModel: mongoose.model("blog", BlogModel),
};
