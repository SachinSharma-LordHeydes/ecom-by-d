"use client"

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, Filter } from 'lucide-react';
import { useRouter } from 'next/navigation';

const fashionItems = [
  {
    id: 1,
    name: 'Traditional Nepali Dhaka Topi',
    price: 'NPR 1,200',
    originalPrice: 'NPR 1,500',
    rating: 4.9,
    reviews: 89,
    image: 'bg-gradient-to-br from-red-600 to-yellow-600',
    badge: 'Authentic',
    badgeColor: 'bg-green-500'
  },
  {
    id: 2,
    name: 'Handwoven Pashmina Shawl',
    price: 'NPR 3,500',
    originalPrice: 'NPR 4,200',
    rating: 5.0,
    reviews: 67,
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    badge: 'Premium',
    badgeColor: 'bg-purple-500'
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
    name: 'Traditional Gunyu Cholo',
    price: 'NPR 4,500',
    originalPrice: 'NPR 5,200',
    rating: 4.8,
    reviews: 134,
    image: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    badge: 'Cultural',
    badgeColor: 'bg-green-600'
  },
  {
    id: 5,
    name: 'Adidas Ultraboost 22',
    price: 'NPR 18,000',
    originalPrice: 'NPR 21,000',
    rating: 4.6,
    reviews: 156,
    image: 'bg-gradient-to-br from-gray-700 to-black',
    badge: 'New',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 6,
    name: 'Sherpa Wool Jacket',
    price: 'NPR 6,800',
    originalPrice: 'NPR 8,000',
    rating: 4.7,
    reviews: 98,
    image: 'bg-gradient-to-br from-amber-600 to-orange-700',
    badge: 'Warm',
    badgeColor: 'bg-red-500'
  }
];

const Fashion = () => {
  const [sortBy, setSortBy] = useState('featured');
  const router=useRouter()

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen">
   
      
      <section className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fashion</h1>
            <p className="text-xl opacity-90">From traditional Nepali wear to international brands</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-nepal-red text-nepal-red">
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
            <p className="text-gray-600">{fashionItems.length} products found</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fashionItems.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative p-6 pb-4">
                  <div className={`${product.image} h-48 rounded-xl mb-4 relative overflow-hidden`}>
                    <div className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {product.badge}
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white p-2">
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
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Fashion;
