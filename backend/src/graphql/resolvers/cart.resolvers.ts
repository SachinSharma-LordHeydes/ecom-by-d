import mongoose from "mongoose";
import { MyContext } from "../../app";
import { User } from "../../models/user.model";
import { Product } from "../../models/product.model";

export const cartResolver = {
  Query: {
    getCart: async (_: any, { userId }: { userId: string }) => {
      try {
        const user = await User.findOne({ clerkId: userId }).populate("cart");
        
        if (!user) throw new Error("User not found");
        
        return user.cart;
      } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
      }
    },
  },

  Mutation: {
    addToCart: async (
      _: any,
      { input }: { input: { productId: string } },
      { userId }: MyContext
    ) => {
      try {
        console.log("Adding to cart for user:", userId);
        console.log("Product ID:", input.productId);

        // Validate user exists
        const user = await User.findOne({ clerkId: userId });
        if (!user) throw new Error("User not found");

        // Validate product exists
        const productId = new mongoose.Types.ObjectId(input.productId);
        const product = await Product.findById(productId);
        // if (!product) throw new Error("Product not found");  //uncomment this after adding product

        // Check if product is already in cart
        const isAlreadyInCart = user.cart.some(
          (itemId: any) => itemId.toString() === productId.toString()
        );

        if (isAlreadyInCart) throw new Error("Product already in cart");

        // Add to cart
        user.cart.push(productId);
        await user.save();

        // Populate and return cart
        await user.populate("cart");
        return user.cart;
      } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
      }
    },

    removeFromCart: async (
      _: any,
      { input }: { input: { userId: string; productId: string } }
    ) => {
      try {
        const user = await User.findOne({ clerkId: input.userId });
        if (!user) throw new Error("User not found");

        const beforeLength = user.cart.length;

        user.cart = user.cart.filter(
          (itemId: any) => itemId.toString() !== input.productId
        );

        const afterLength = user.cart.length;
        const removed = beforeLength !== afterLength;

        await user.save();
        await user.populate("cart");

        return {
          success: removed,
          message: removed ? "Product removed from cart" : "Product not found in cart",
          cart: user.cart,
        };
      } catch (error) {
        console.error("Error removing from cart:", error);
        throw error;
      }
    },
  },
};