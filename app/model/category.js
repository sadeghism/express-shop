const mongoose = require("mongoose");

const CategoryModel = new mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = {
  CategoryModel: mongoose.model("blog", CategoryModel),
};
