"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authResolvers = void 0;
const user_model_1 = require("../../models/user.model");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
exports.authResolvers = {
    Query: {
        me: (_1, __1, _a) => __awaiter(void 0, [_1, __1, _a], void 0, function* (_, __, { userId }) {
            if (!userId)
                throw new Error("Not authenticated");
            return user_model_1.User.findOne({ clerkId: userId })
                .populate("profile")
                .populate("address")
                .populate("productsList")
                .populate("orderLists")
                .populate("cart")
                .populate("wishList");
        }),
        user: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { clerkId }) {
            return user_model_1.User.findOne({ clerkId })
                .populate("profile")
                .populate("address")
                .populate("productsList")
                .populate("orderLists")
                .populate("cart")
                .populate("wishList");
        }),
    },
    Mutation: {
        signupUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { signupInput: { email, password } }) {
            try {
                // Use createUser instead of create
                const clerkUser = yield clerk_sdk_node_1.clerkClient.users.createUser({
                    emailAddress: [email],
                    password,
                });
                const clerkId = clerkUser.id;
                // Sync with MongoDB
                const userDoc = new user_model_1.User({
                    clerkId,
                    email,
                    role: "buyer", // Default role
                });
                yield userDoc.save();
                return userDoc;
            }
            catch (err) {
                console.error("Error signing up user:", err);
                throw new Error("Failed to sign up user");
            }
        }),
        updateUserRole: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { clerkId, role }, { userId }) {
            if (!userId)
                throw new Error("Not authenticated");
            const currentUser = yield user_model_1.User.findOne({ clerkId: userId });
            if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) !== "admin")
                throw new Error("Not authorized");
            return user_model_1.User.findOneAndUpdate({ clerkId }, { role }, { new: true }).populate([
                "profile",
                "address",
                "productsList",
                "orderLists",
                "cart",
                "wishList",
            ]);
        }),
    },
};
