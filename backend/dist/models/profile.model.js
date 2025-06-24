"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProfileSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: (number) => /^(98|97)\d{8}$/.test(number),
            message: "Invalid phone number (must start with 98 or 97 and shpuld be of 10 digits)",
        },
    },
    alternateNumber: {
        type: String,
        required: true,
        validate: {
            validator: (number) => /^(98|97)\d{8}$/.test(number),
            message: "Invalid alternate phone number (must start with 98 or 97 and shpuld be of 10 digits)",
        },
    },
}, { timestamps: true });
exports.Profile = mongoose_1.default.model("Profile", ProfileSchema);
