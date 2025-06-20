import mongoose from "mongoose";
import { IWishlist } from "../interfaces/modelsInterfaces/model.interface";

const WishListSchema = new mongoose.Schema<IWishlist>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
},{timestamps:true});

export const WishList = mongoose.model<IWishlist>("WishList", WishListSchema);