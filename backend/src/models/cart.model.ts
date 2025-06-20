import mongoose from "mongoose";
import { ICart } from "../interfaces/modelsInterfaces/model.interface";

const CartSchema = new mongoose.Schema<ICart>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
},{timestamps:true});

export const Cart = mongoose.model<ICart>("Cart", CartSchema);

// userID
// productID
// cartID
