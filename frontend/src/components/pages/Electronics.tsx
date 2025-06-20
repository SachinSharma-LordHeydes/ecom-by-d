"use client";

import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { Button } from "@/components/ui/button";
import { Filter, Heart, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddToCartBtn from "../buttons/AddToCartBtn";

const electronics = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: "NPR 1,45,000",
    originalPrice: "NPR 1,65,000",
    rating: 4.8,
    reviews: 324,
    image: "bg-gradient-to-br from-gray-800 to-black",
    badge: "Hot Deal",
    badgeColor: "bg-red-500",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: "NPR 1,85,000",
    originalPrice: "NPR 2,10,000",
    rating: 4.9,
    reviews: 256,
    image: "bg-gradient-to-br from-blue-600 to-purple-700",
    badge: "Premium",
    badgeColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: "NPR 2,25,000",
    originalPrice: "NPR 2,50,000",
    rating: 4.9,
    reviews: 189,
    image: "bg-gradient-to-br from-gray-300 to-gray-600",
    badge: "Best Seller",
    badgeColor: "bg-orange-500",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: "NPR 45,000",
    originalPrice: "NPR 52,000",
    rating: 4.7,
    reviews: 445,
    image: "bg-gradient-to-br from-black to-gray-700",
    badge: "Popular",
    badgeColor: "bg-blue-500",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    price: "NPR 1,65,000",
    originalPrice: "NPR 1,85,000",
    rating: 4.6,
    reviews: 167,
    image: "bg-gradient-to-br from-silver to-gray-500",
    badge: "New",
    badgeColor: "bg-green-500",
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: "NPR 55,000",
    originalPrice: "NPR 62,000",
    rating: 4.8,
    reviews: 298,
    image: "bg-gradient-to-br from-rose-500 to-pink-600",
    badge: "Trending",
    badgeColor: "bg-pink-500",
  },
];

const Electronics = () => {
  const [sortBy, setSortBy] = useState("featured");
  const router = useRouter();

  const { value } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleAddToCart = (
    e: React.MouseEvent,
    product: (typeof electronics)[0]
  ) => {
    e.stopPropagation();
  };

  console.log(value);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-nepal-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Electronics</h1>
            <p className="text-xl opacity-90">
              Latest gadgets and technology at unbeatable prices
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-nepal-red text-nepal-red"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nepal-red"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            <p className="text-gray-600">{electronics.length} products found</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {electronics.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => handleAddToCart(e, product)}
              >
                <div className="relative p-6 pb-4">
                  <div
                    className={`${product.image} h-48 rounded-xl mb-4 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                    >
                      {product.badge}
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="bg-white/90 hover:bg-white p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-nepal-red transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-nepal-red">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* <Button
                    className="w-full bg-nepal-red hover:bg-nepal-crimson transition-colors"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("clecked on add cart");
                      dispatch(increment());
                      console.log(value);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button> */}

                  <AddToCartBtn />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;
