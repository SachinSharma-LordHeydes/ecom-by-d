import { Request, Response } from "express";
import { Webhook } from "svix";
import { User } from "../models/user.model";

// Clerk webhook secret from environment variables

interface ClerkWebhookEvent {
  type: string;
  data: {
    id: string;
    email_addresses: { email_address: string }[];
  };
}

export const clerk_webhook = async (req: Request, res: Response) => {
  // Get the headers for verification
  const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET || "";
  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  // Verify headers exist
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({
      error: "Missing Svix headers",
    });
  }

  // Get the raw body as a Buffer
  const payload = (req as any).rawBody;

  if (!payload) {
    return res.status(400).json({
      error: "Missing request body",
    });
  }

  // Verify the webhook signature
  let evt: ClerkWebhookEvent;
  try {
    console.log("webhook secret-->",CLERK_WEBHOOK_SECRET)
    const wh = new Webhook(CLERK_WEBHOOK_SECRET);
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as ClerkWebhookEvent;
  } catch (err) {
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
      const email = email_addresses[0]?.email_address;

      if (!clerkId || !email) {
        return res.status(400).json({ error: "Missing clerkId or email" });
      }

      // Create user in MongoDB with default role "buyer"
      await User.create({
        clerkId,
        email,
        role: "buyer",
      });
    } else if (type === "user.updated") {
      const { id: clerkId, email_addresses } = data;
      const email = email_addresses[0]?.email_address;

      if (!clerkId || !email) {
        return res.status(400).json({ error: "Missing clerkId or email" });
      }

      // Update user in MongoDB
      await User.findOneAndUpdate(
        { clerkId },
        { email },
        { new: true, upsert: true }
      );
    }

    return res.status(200).json({ message: "Webhook received" });
  } catch (err) {
    console.error("Error processing webhook:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};