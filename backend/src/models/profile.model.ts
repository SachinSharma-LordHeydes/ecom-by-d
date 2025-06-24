import mongoose from "mongoose";
import { IProfile } from "../interfaces/modelsInterfaces/model.interface";

const ProfileSchema = new mongoose.Schema<IProfile>(
  {
    firstName:{
      type:String ,
      required:true
    },
    lastName:{
      type:String ,
      required:true
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: (number: string) => /^(98|97)\d{8}$/.test(number),
        message:
          "Invalid phone number (must start with 98 or 97 and shpuld be of 10 digits)",
      },
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model<IProfile>("Profile", ProfileSchema);