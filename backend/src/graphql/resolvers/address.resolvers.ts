import { MyContext } from "../../app";
import { Address } from "../../models/address.model";
import { User } from "../../models/user.model";

export const addresssResolvers = {
  Query: {
    getAddress: async (_: any, { id }: { id: string }) => {
      return Address.findById(id);
    },
  },
  Mutation: {
    createAddress: async (
      _: any,
      {
        input,
      }: {
        input: {
          provinceNumber: string;
          addressLabel: string;
          provinceName: string;
          pinCode: string;
          locality: string;
          city: string;
          landMark: string;
        };
      },
      { userId }: MyContext
    ) => {
      if (!userId) throw new Error("Not authenticated");
      console.log("user ID-->", userId);
      const user = await User.findOne({ clerkId: userId });
      console.log("user--->", user);

      if (!user) throw new Error("User not avilable with this user id");

      const address = new Address(input);
      await address.save();

      user.address = address._id;
      await user.save();

      console.log("profile--->", address);

      return address
    },

    updateAddress: async (
      _: any,
      {
        id,
        input,
      }: {
        id: string;
        input: Partial<{
          provinceNumber: string;
          addressLabel: string;
          provinceName: string;
          pinCode: string;
          locality: string;
          city: string;
          landMark: string;
        }>;
      },
      { userId }: MyContext
    ) => {
      if (!userId) throw new Error("Not authenticated");

      const updatedAddress = await Address.findByIdAndUpdate(id, input, {
        new: true,
      });
      return updatedAddress;
    },
  },
};
