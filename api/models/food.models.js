import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema(
  {
    foodname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mealType: {
      type: String,
      required: true,
    },
    categoryType: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
export default Food;

