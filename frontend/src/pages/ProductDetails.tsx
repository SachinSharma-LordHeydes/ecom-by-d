"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Minus,
  Plus,
  RefreshCw,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Sample product data - in a real app, this would come from an API
const allProducts = [
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
    description:
      'Experience the pinnacle of mobile innovation with the Samsung Galaxy S24 Ultra. Featuring a stunning 6.8" Dynamic AMOLED display, advanced AI photography, and the power of the latest Snapdragon processor.',
    features: [
      '6.8" Dynamic AMOLED Display',
      "200MP Main Camera",
      "S Pen Included",
      "5000mAh Battery",
      "12GB RAM",
      "256GB Storage",
    ],
    inStock: true,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Traditional Nepali Dhaka Topi",
    price: "NPR 1,200",
    originalPrice: "NPR 1,500",
    rating: 4.9,
    reviews: 89,
    image: "bg-gradient-to-br from-red-600 to-yellow-600",
    badge: "Authentic",
    badgeColor: "bg-green-500",
    description:
      "Authentic handcrafted Nepali Dhaka Topi made by skilled artisans from traditional materials. A symbol of Nepali culture and heritage.",
    features: [
      "100% Handmade",
      "Traditional Design",
      "Premium Cotton",
      "Authentic Nepali Craft",
      "Cultural Heritage",
      "One Size Fits All",
    ],
    inStock: true,
    category: "Fashion",
  },
  {
    id: 3,
    name: "Handwoven Pashmina Shawl",
    price: "NPR 3,500",
    originalPrice: "NPR 4,200",
    rating: 5.0,
    reviews: 67,
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    badge: "Premium",
    badgeColor: "bg-purple-500",
    description:
      "Luxurious handwoven Pashmina shawl crafted from the finest cashmere wool. Soft, warm, and elegant - perfect for any occasion.",
    features: [
      "100% Cashmere",
      "Handwoven",
      "Soft & Warm",
      "Elegant Design",
      "Natural Fibers",
      "Premium Quality",
    ],
    inStock: true,
    category: "Fashion",
  },
];


export default function ProductDetails({ id }:{id:string}) {
  console.log("Product ID:", id);
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = allProducts.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button
            onClick={() => router.push("/")}
            className="bg-nepal-red hover:bg-nepal-crimson"
          >
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen">

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600 mb-8">
            <span
              className="cursor-pointer hover:text-nepal-red"
              onClick={() => router.push("/")}
            >
              Home
            </span>
            <span className="mx-2">/</span>
            <span className="cursor-pointer hover:text-nepal-red">
              {product.category}
            </span>
            <span className="mx-2">/</span>
            <span className="text-nepal-red">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div
                className={`${product.image} h-96 lg:h-[500px] rounded-2xl relative overflow-hidden`}
              >
                <div
                  className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  {product.badge}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      product.image
                    } h-20 rounded-lg cursor-pointer border-2 ${
                      selectedImage === i
                        ? "border-nepal-red"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(i)}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-nepal-red">
                  {product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  Save NPR{" "}
                  {parseInt(product.originalPrice.replace(/[^\d]/g, "")) -
                    parseInt(product.price.replace(/[^\d]/g, ""))}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>

              <div>
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-nepal-red rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    className="px-3"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-nepal-red hover:bg-nepal-crimson text-lg py-6"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  className="border-nepal-red text-nepal-red hover:bg-nepal-red hover:text-white text-lg py-6"
                  size="lg"
                >
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="py-6">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-nepal-red" />
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-600">
                      Within Kathmandu Valley
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-nepal-red" />
                  <div>
                    <p className="font-semibold text-sm">Warranty</p>
                    <p className="text-xs text-gray-600">1 Year Official</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-nepal-red" />
                  <div>
                    <p className="font-semibold text-sm">Easy Returns</p>
                    <p className="text-xs text-gray-600">
                      7 Days Return Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// export default ProductDetails;
