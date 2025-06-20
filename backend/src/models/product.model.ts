import mongoose from "mongoose";
import { IProduct } from "../interfaces/modelsInterfaces/model.interface";

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productImages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
    features: [
      {
        type: String,
        required: true,
      },
     ],
    discount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
    },
    approveStatus: {
      type: String,
      enum: ["pending", "approved", "denied"],
    },
    ratingAndReviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
    likesAndDislikes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "likesAndDislikes",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);

// productName
// productPrice
// productDescription
// productImages
// productQuantity
// discountModel:discountID
// //productType:["Lmited","premium","general"]
// ratingAndReviews:ratingAndReviewID
// productCatagory
// brand
// status:["pending","shipping","dilivered"]
// //tags
// likedProduct
// unlikedProduct
// productID
