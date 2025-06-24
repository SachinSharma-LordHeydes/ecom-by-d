"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Discount",
    },
    approveStatus: {
        type: String,
        enum: ["pending", "approved", "denied"],
    },
    ratingAndReviews: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "RatingAndReview",
    },
    likesAndDislikes: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "likesAndDislikes",
    },
}, { timestamps: true });
exports.Product = mongoose_1.default.model("Product", ProductSchema);
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
