// graphql/resolvers/profile.resolvers.ts
import { MyContext } from "../../app"; // Your context type
import { Profile } from "../../models/profile.model"; // Mongoose model
import { User } from "../../models/user.model";

export const profileResolvers = {
  Query: {
    getProfile: async (_: any, { id }: { id: string }) => {
      return Profile.findById(id);
    },
  },
  Mutation: {
    createProfile: async (
      _: any,
      {
        input,
      }: {
        input: { firstName: string; lastName: string; phoneNumber: string };
      },
      { userId }: MyContext
    ) => {
      if (!userId) throw new Error("Not authenticated");

      const user = await User.findOne({ clerkId: userId });
      console.log("user--->", user);

      if (!user) throw new Error("User not avilable with this user id");

      const profile = new Profile(input);
      await profile.save();

      console.log("profile--->", profile);

      user.profile = profile._id;
      await user.save();

      return profile;
    },

    updateProfile: async (
      _: any,
      {
        id,
        input,
      }: {
        id: string;
        input: Partial<{
          firstName: string;
          lastName: string;
          phoneNumber: string;
        }>;
      },
      { userId }: MyContext
    ) => {
      if (!userId) throw new Error("Not authenticated");

      const updatedProfile = await Profile.findByIdAndUpdate(id, input, {
        new: true,
      });
      return updatedProfile;
    },
  },
};
