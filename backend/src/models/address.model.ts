import mongoose from "mongoose";
import { PROVINCE_MAP } from "../constants/province.constants";
import { IAddress } from "../interfaces/modelsInterfaces/model.interface";

const AddressSchema = new mongoose.Schema<IAddress>(
  {
    provinceNumber: {
      type: String,
      required: true,
    },
    addressLabel: {
      type: String,
      required: true,
    },
    provinceName: {
      type: String,
      required: true,
      validate: {
        validator: function (provinceName: string) {
          const provinceNumber = this.provinceNumber;
          return PROVINCE_MAP[provinceNumber] === provinceName;
        },
        message: "Province name does not match the province number!",
      },
    },
    pinCode: {
      type: String,
      required: true,
      validate: {
        validator: (postalCode: string) => /^[1-9][0-9]{4}$/.test(postalCode),
        message: "Invalid Nepali postal code (e.g., 44600)",
      },
    },
    locality: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    landMark: {
      type: String,
    },
  },
  { timestamps: true }
);

// AddressSchema.pre("save",async function name(next:NextFunction) {

// })

AddressSchema.methods.checkPNameMatchesOrNotWithPNumber = async function (
  provinceNumber: string,provinceName:string
) {
    return PROVINCE_MAP[provinceNumber]===provinceName
};

export const Address = mongoose.model<IAddress>("Address", AddressSchema);
