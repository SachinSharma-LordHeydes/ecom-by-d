import mongoose from "mongoose";
import { IRatingAndReview } from "../interfaces/modelsInterfaces/model.interface";

const RatingAndReviewSchema = new mongoose.Schema<IRatingAndReview>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    likesAndDislikes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "likesAndDislikes",
    },
  },
  { timestamps: true }
);

export const RatingAndReview = mongoose.model<IRatingAndReview>(
  "RatingAndReview",
  RatingAndReviewSchema
);

// userId
// review
// rating
// productID
// likedReviews
// unlikedReviews
// reviewAndRatingID
