import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { clerkMiddleware, getAuth } from "@clerk/express";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { clerk_webhook } from "./clerk/webhook";
import { resolvers, typeDefs } from "./graphql";
import { User } from "./models/user.model";
import { dbConnect } from "./utils/database/dbConnect";

// Define the context interface
export interface MyContext {
  req: Request;
  res: Response;
  userId?: string;
  user?: any;
}

export const startServer = async () => {
  dotenv.config();
  await dbConnect();

  const app = express();

  // Middleware to capture raw body for webhook
  app.use(
    "/clerk-webhook",
    express.raw({ type: "application/json" }),
    (req, res, next) => {
      (req as any).rawBody = req.body; // Store raw body
      req.body = JSON.parse(req.body.toString()); // Parse JSON for downstream use
      next();
    }
  );

  // Webhook endpoint
  app.post("/clerk-webhook", clerk_webhook);

  // Apply JSON parsing for other routes
  app.use(express.json());

  // Initialize Apollo Server with MyContext
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
  });
  await server.start();

  // Apply middleware for GraphQL
  app.use(
    "/graphql",
    cors(),
    clerkMiddleware(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        const authHeader = req.headers.authorization || "";
        console.log("Received token:", authHeader); 

        const { userId } = getAuth(req);

        let userDoc = null;
        if (userId) {
          userDoc = await User.findOne({ clerkId: userId });

          if (!userDoc) {
            try {
              const clerkUser = await clerkClient.users.getUser(userId);
              userDoc = new User({
                clerkId: userId,
                email: clerkUser.emailAddresses[0].emailAddress,
                role: "buyer", // Default role
              });
              await userDoc.save();
            } catch (err) {
              console.error("Error syncing user from Clerk:", err);
            }
          }
        }

        // Return context matching MyContext
        return {
          req,
          res,
          userId: userId ?? undefined,
          user: userDoc ?? undefined,
        };
      },
    })
  );

  const PORT = process.env.PORT || 8001;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
};
