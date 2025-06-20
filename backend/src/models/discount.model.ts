import mongoose from "mongoose";
import { IDiscount } from "../interfaces/modelsInterfaces/model.interface";

const DiscountSchema = new mongoose.Schema<IDiscount>(
  {
    discountPercent: {
      type: String,
      required: true,
    },
    discountPeriod: {
      type: String,
      required: true,
    },
    discountOccasions: {
      type: String,
    },
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

export const Discount = mongoose.model<IDiscount>("Discount", DiscountSchema);

// discountPercent
// discountPeriod
// discountOccasions
// productID
