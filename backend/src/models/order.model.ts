import mongoose from "mongoose";
import { IOrder } from "../interfaces/modelsInterfaces/model.interface";

const OrderSchema = new mongoose.Schema<IOrder>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: String,
      required: true,
      default: "1",
    },
    diliveryAddress: {
      type: String,
      required: true,
    },
    discountOccasions: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model<IOrder>("Order", OrderSchema);

// userID
// productID
// diliveryAddress
// quantity
// orderID
