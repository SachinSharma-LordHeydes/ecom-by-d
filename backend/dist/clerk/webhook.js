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
exports.clerk_webhook = void 0;
const svix_1 = require("svix");
const user_model_1 = require("../models/user.model");
// Clerk webhook secret from environment variables
const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET || "";
const clerk_webhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // Get the headers for verification
    const svix_id = req.headers["svix-id"];
    const svix_timestamp = req.headers["svix-timestamp"];
    const svix_signature = req.headers["svix-signature"];
    // Verify headers exist
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return res.status(400).json({
            error: "Missing Svix headers",
        });
    }
    // Get the raw body as a Buffer
    const payload = req.rawBody;
    if (!payload) {
        return res.status(400).json({
            error: "Missing request body",
        });
    }
    // Verify the webhook signature
    let evt;
    try {
        const wh = new svix_1.Webhook(CLERK_WEBHOOK_SECRET);
        evt = wh.verify(payload, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        });
    }
    catch (err) {
        console.error("Error verifying webhook:", err);
        return res.status(400).json({
            error: "Invalid webhook signature",
        });
    }
    // Process the webhook event
    const { type, data } = evt;
    try {
        if (type === "user.created") {
            const { id: clerkId, email_addresses } = data;
            const email = (_a = email_addresses[0]) === null || _a === void 0 ? void 0 : _a.email_address;
            if (!clerkId || !email) {
                return res.status(400).json({ error: "Missing clerkId or email" });
            }
            // Create user in MongoDB with default role "buyer"
            yield user_model_1.User.create({
                clerkId,
                email,
                role: "buyer",
            });
        }
        else if (type === "user.updated") {
            const { id: clerkId, email_addresses } = data;
            const email = (_b = email_addresses[0]) === null || _b === void 0 ? void 0 : _b.email_address;
            if (!clerkId || !email) {
                return res.status(400).json({ error: "Missing clerkId or email" });
            }
            // Update user in MongoDB
            yield user_model_1.User.findOneAndUpdate({ clerkId }, { email }, { new: true, upsert: true });
        }
        return res.status(200).json({ message: "Webhook received" });
    }
    catch (err) {
        console.error("Error processing webhook:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.clerk_webhook = clerk_webhook;
