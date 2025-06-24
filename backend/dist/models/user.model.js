"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["buyer", "seller", "admin"],
        default: "buyer",
    },
    profile: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Profile",
    },
    address: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Address",
    },
    productsList: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
    orderLists: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    cart: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
    wishList: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
}, { timestamps: true });
exports.User = mongoose_1.default.model("User", UserSchema);
