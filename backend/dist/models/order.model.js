"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    productId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.Order = mongoose_1.default.model("Order", OrderSchema);
// userID
// productID
// diliveryAddress
// quantity
// orderID
