"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S24',
    price: 'NPR 1,25,000',
    originalPrice: 'NPR 1,40,000',
    rating: 4.8,
    reviews: 124,
    image: 'bg-gradient-to-br from-gray-800 to-black',
    badge: 'Hot Deal',
    badgeColor: 'bg-red-500'
  },
  {
    id: 2,
    name: 'Traditional Nepali Dhaka Topi',
    price: 'NPR 850',
    originalPrice: 'NPR 1,200',
    rating: 4.9,
    reviews: 89,
    image: 'bg-gradient-to-br from-red-600 to-yellow-600',
    badge: 'Local',
    badgeColor: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Nike Air Max 270',
    price: 'NPR 15,500',
    originalPrice: 'NPR 18,000',
    rating: 4.7,
    reviews: 203,
    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
    badge: 'Popular',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 4,
    name: 'Handwoven Pashmina Shawl',
    price: 'NPR 3,200',
    originalPrice: 'NPR 4,500',
    rating: 5.0,
    reviews: 67,
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    badge: 'Premium',
    badgeColor: 'bg-purple-500'
  },
  {
    id: 5,
    name: 'MacBook Air M2',
    price: 'NPR 1,85,000',
    originalPrice: 'NPR 2,10,000',
    rating: 4.9,
    reviews: 156,
    image: 'bg-gradient-to-br from-gray-300 to-gray-600',
    badge: 'Best Seller',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 6,
    name: 'Himalayan Coffee Beans',
    price: 'NPR 1,800',
    originalPrice: 'NPR 2,200',
    rating: 4.6,
    reviews: 234,
    image: 'bg-gradient-to-br from-amber-700 to-yellow-600',
    badge: 'Organic',
    badgeColor: 'bg-green-600'
  }
];

const FeaturedProducts = () => {
  const router = useRouter();

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of the best products, 
            from international brands to authentic Nepali crafts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Image */}
              <div className="relative p-6 pb-4">
                <div className={`${product.image} h-48 rounded-xl mb-4 relative overflow-hidden`}>
                  <div className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
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

              {/* Product Info */}
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
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-nepal-red">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                <Button 
                  className="w-full bg-nepal-red hover:bg-nepal-crimson transition-colors"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-nepal-red text-nepal-red hover:bg-nepal-red hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
