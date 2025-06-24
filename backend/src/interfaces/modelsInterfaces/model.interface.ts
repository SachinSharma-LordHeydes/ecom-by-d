import mongoose from "mongoose";

export interface IAddress {
  addressLabel: string;
  // provinceNumber: string;
  pinCode: string;
  landMark?: string;
  locality: string;
  city: string;
  provinceName: string;
}

export interface ICart {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
}

export interface IDiscount {
  discountPercent: string;
  discountPeriod: string;
  discountOccasions: string;
  productId: mongoose.Types.ObjectId[];
}

export interface IOrder {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity: string;
  diliveryAddress: string;
  discountOccasions: string;
}

export interface IProduct {
  productName: string;
  productPrice: string;
  productDescription: string;
  productImages: mongoose.Types.ObjectId[];
  features: string[];
  discount: mongoose.Types.ObjectId;
  approveStatus: "pending" | "approved" | "denied";
  ratingAndReviews: mongoose.Types.ObjectId;
  likesAndDislikes: mongoose.Types.ObjectId;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface IRatingAndReview {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  review: string;
  rating: string;
  likesAndDislikes: mongoose.Types.ObjectId;
}

export interface IUser {
  clerkId: string;
  email: string;
  role: "buyer" | "seller" | "admin";
  profile: mongoose.Types.ObjectId;
  address: mongoose.Types.ObjectId;
  productsList: mongoose.Types.ObjectId[];
  orderLists: mongoose.Types.ObjectId[];
  cart: mongoose.Types.ObjectId[];
  wishList: mongoose.Types.ObjectId[];
}

export interface IWishlist {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
}
