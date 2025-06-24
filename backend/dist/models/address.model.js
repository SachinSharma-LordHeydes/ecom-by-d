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
exports.Address = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const province_constants_1 = require("../constants/province.constants");
const AddressSchema = new mongoose_1.default.Schema({
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
            validator: function (provinceName) {
                const provinceNumber = this.provinceNumber;
                return province_constants_1.PROVINCE_MAP[provinceNumber] === provinceName;
            },
            message: "Province name does not match the province number!",
        },
    },
    pinCode: {
        type: String,
        required: true,
        validate: {
            validator: (postalCode) => /^[1-9][0-9]{4}$/.test(postalCode),
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
}, { timestamps: true });
// AddressSchema.pre("save",async function name(next:NextFunction) {
// })
AddressSchema.methods.checkPNameMatchesOrNotWithPNumber = function (provinceNumber, provinceName) {
    return __awaiter(this, void 0, void 0, function* () {
        return province_constants_1.PROVINCE_MAP[provinceNumber] === provinceName;
    });
};
exports.Address = mongoose_1.default.model("Address", AddressSchema);
