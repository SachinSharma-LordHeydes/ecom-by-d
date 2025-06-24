"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingAndReview = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RatingAndReviewSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "likesAndDislikes",
    },
}, { timestamps: true });
exports.RatingAndReview = mongoose_1.default.model("RatingAndReview", RatingAndReviewSchema);
// userId
// review
// rating
// productID
// likedReviews
// unlikedReviews
// reviewAndRatingID
