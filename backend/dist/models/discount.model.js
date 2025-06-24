"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DiscountSchema = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
}, { timestamps: true });
exports.Discount = mongoose_1.default.model("Discount", DiscountSchema);
// discountPercent
// discountPeriod
// discountOccasions
// productID
