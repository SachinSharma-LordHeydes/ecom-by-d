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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const express_1 = require("@clerk/express");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_2 = __importDefault(require("express"));
const webhook_1 = require("./clerk/webhook");
const graphql_1 = require("./graphql");
const user_model_1 = require("./models/user.model");
const dbConnect_1 = require("./utils/database/dbConnect");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    yield (0, dbConnect_1.dbConnect)();
    const app = (0, express_2.default)();
    // Middleware to capture raw body for webhook
    app.use("/clerk-webhook", express_2.default.raw({ type: "application/json" }), (req, res, next) => {
        req.rawBody = req.body; // Store raw body
        req.body = JSON.parse(req.body.toString()); // Parse JSON for downstream use
        next();
    });
    // Webhook endpoint
    app.post("/clerk-webhook", webhook_1.clerk_webhook);
    // Apply JSON parsing for other routes
    app.use(express_2.default.json());
    // Initialize Apollo Server with MyContext
    const server = new server_1.ApolloServer({
        typeDefs: graphql_1.typeDefs,
        resolvers: graphql_1.resolvers,
    });
    yield server.start();
    // Apply middleware for GraphQL
    app.use("/graphql", (0, cors_1.default)(), (0, express_1.clerkMiddleware)(), (0, express4_1.expressMiddleware)(server, {
        context: (_a) => __awaiter(void 0, [_a], void 0, function* ({ req, res }) {
            const authHeader = req.headers.authorization || "";
            console.log("Received token:", authHeader);
            const { userId } = (0, express_1.getAuth)(req);
            let userDoc = null;
            if (userId) {
                userDoc = yield user_model_1.User.findOne({ clerkId: userId });
                if (!userDoc) {
                    try {
                        const clerkUser = yield clerk_sdk_node_1.clerkClient.users.getUser(userId);
                        userDoc = new user_model_1.User({
                            clerkId: userId,
                            email: clerkUser.emailAddresses[0].emailAddress,
                            role: "buyer", // Default role
                        });
                        yield userDoc.save();
                    }
                    catch (err) {
                        console.error("Error syncing user from Clerk:", err);
                    }
                }
            }
            // Return context matching MyContext
            return {
                req,
                res,
                userId: userId !== null && userId !== void 0 ? userId : undefined,
                user: userDoc !== null && userDoc !== void 0 ? userDoc : undefined,
            };
        }),
    }));
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/graphql`);
    });
});
exports.startServer = startServer;
