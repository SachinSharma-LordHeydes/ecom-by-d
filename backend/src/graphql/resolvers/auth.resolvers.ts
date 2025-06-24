import { User } from "../../models/user.model";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const authResolvers = {
  Query: {
    me: async (_: any, __: any, { userId }: { userId?: string }) => {
      if (!userId) throw new Error("Not authenticated");
      return User.findOne({ clerkId: userId })
        .populate("profile")
        .populate("address")
        .populate("productsList")
        .populate("orderLists")
        .populate("cart")
        .populate("wishList");
    },
    user: async (_: any, { clerkId }: { clerkId: string }) => {
      return User.findOne({ clerkId })
        .populate("profile")
        .populate("address")
        .populate("productsList")
        .populate("orderLists")
        .populate("cart")
        .populate("wishList");
    },
  },
  Mutation: {
    signupUser: async (_: any, { signupInput: { email, password } }: { signupInput: { email: string; password: string } }) => {
      try {
        // Use createUser instead of create
        const clerkUser = await clerkClient.users.createUser({
          emailAddress: [email],
          password,
        });

        const clerkId = clerkUser.id;

        // Sync with MongoDB
        const userDoc = new User({
          clerkId,
          email,
          role: "buyer", // Default role
        });
        await userDoc.save();

        return userDoc;
      } catch (err) {
        console.error("Error signing up user:", err);
        throw new Error("Failed to sign up user");
      }
    },
    updateUserRole: async (
      _: any,
      { clerkId, role }: { clerkId: string; role: string },
      { userId }: { userId?: string }
    ) => {
      if (!userId) throw new Error("Not authenticated");
      const currentUser = await User.findOne({ clerkId: userId });
      if (currentUser?.role !== "admin") throw new Error("Not authorized");
      return User.findOneAndUpdate(
        { clerkId },
        { role },
        { new: true }
      ).populate([
        "profile",
        "address",
        "productsList",
        "orderLists",
        "cart",
        "wishList",
      ]);
    },
  },
};