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
exports.dbConnect = dbConnect;
const mongoose_1 = __importDefault(require("mongoose"));
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        const BD_URI = process.env.BD_URI;
        try {
            if (!BD_URI)
                throw new Error("Data base url not found");
            const dbConnectionResponse = yield mongoose_1.default.connect(BD_URI);
            if (!dbConnectionResponse)
                throw new Error("Unable to make an connection with database");
            console.log("Successfully made an connection with database");
        }
        catch (error) {
            console.log("Data base connection error", error);
        }
    });
}
