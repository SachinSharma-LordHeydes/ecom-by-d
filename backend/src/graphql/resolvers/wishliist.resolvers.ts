import { User } from "../../models/user.model";

export const wishlistResolvers = {
  Query: {
    getAllWishlists: async (_: any, { userId }: { userId: string }) => {
      try {
        if (!userId) throw new Error("Unauthorize access");
        const user = await User.findOne({ clerkId: userId }).populate(
          "wishList"
        );

        if (!user) throw new Error("User not found");

        return user.wishList;
      } catch (error) {
        console.log("error while fetching all wishlists", error);
        throw error;
      }
    },
  },
  Mutation:{
    addToWishlists:async(_:any,{input}:{input:{productId:string}})=>{
        try {
            
        } catch (error) {
            
        }
    }
  }
};
