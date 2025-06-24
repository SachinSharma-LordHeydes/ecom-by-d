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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContext = void 0;
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const getContext = (_a) => __awaiter(void 0, [_a], void 0, function* ({ req }) {
    var _b, _c, _d;
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            return {};
        const token = authHeader.replace("Bearer ", "");
        const session = yield (0, clerk_sdk_node_1.ClerkExpressWithAuth)({})(req, {}, () => { });
        const userId = (_b = req.auth) === null || _b === void 0 ? void 0 : _b.userId;
        const email = (_d = (_c = req.auth) === null || _c === void 0 ? void 0 : _c.sessionClaims) === null || _d === void 0 ? void 0 : _d.email;
        return { userId, email };
    }
    catch (err) {
        return {};
    }
});
exports.getContext = getContext;
