const mongoose = require("mongoose");
const ProductModel = new mongoose.Schema({
  title: { type: String, required: true },
  short_desc: { type: String, required: true },
  total_desc: { type: String, required: true },
  image: { type: [String], required: true },
  like: { type: [mongoose.Types.ObjectId], default: [] },
  deslike: { type: [mongoose.Types.ObjectId], default: [] },
  bookmark: { type: [mongoose.Types.ObjectId], default: [] },
  count: { type: Number, default: 0, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0, required: true },
  type: { type: String, required: true },
  format: { type: String, required: true },
  teacher: { type: mongoose.Types.ObjectId, required: true },
  feture: {
    type: Object,
    default: {
      length: "",
      wigth: "",
      weigth: "",
      color: [],
      model: [],
      mading: "",
    },
  },
});
module.exports = {
  ProductModel: mongoose.model("blog", ProductModel),
};
