import mongoose from "mongoose";
import BestSeller from "../../src/components/BestSeller";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    sizes: {
        type: Array,
        required: true,
    },
    bestSeller: {
        type: Boolean,
    },
    date: {
        type: Number,
        required: true,
    },
}); 

const Product = mongoose.model("product", productSchema);

export default Product;
