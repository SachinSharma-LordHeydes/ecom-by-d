// "use client"

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, Trash2 } from 'lucide-react';

const wishlistItems = [
  {
    id: 1,
    name: 'Samsung Galaxy S24',
    price: 'NPR 1,25,000',
    originalPrice: 'NPR 1,40,000',
    rating: 4.8,
    reviews: 124,
    image: 'bg-gradient-to-br from-gray-800 to-black',
    inStock: true
  },
  {
    id: 2,
    name: 'Traditional Nepali Dhaka Topi',
    price: 'NPR 850',
    originalPrice: 'NPR 1,200',
    rating: 4.9,
    reviews: 89,
    image: 'bg-gradient-to-br from-red-600 to-yellow-600',
    inStock: true
  },
  {
    id: 3,
    name: 'Handwoven Pashmina Shawl',
    price: 'NPR 3,200',
    originalPrice: 'NPR 4,500',
    rating: 5.0,
    reviews: 67,
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    inStock: false
  }
];

const Wishlist = () => {
  return (
    <div className="min-h-screen">
      
      <section className="bg-nepal-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Wishlist</h1>
            <p className="text-xl opacity-90">Items you've saved for later</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-600 mb-4">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-8">Start adding items you love to your wishlist</p>
              <Button className="bg-nepal-red hover:bg-nepal-crimson">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Wishlist ({wishlistItems.length} items)</h2>
                <Button variant="outline" className="border-nepal-red text-nepal-red">
                  Clear All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <div className="relative p-6 pb-4">
                      <div className={`${item.image} h-48 rounded-xl mb-4 relative overflow-hidden`}>
                        {!item.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-semibold">Out of Stock</span>
                          </div>
                        )}
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="px-6 pb-6">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(item.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'fill-gray-200 text-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {item.rating} ({item.reviews})
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-nepal-red">{item.price}</span>
                        <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                      </div>

                      <Button 
                        className={`w-full transition-colors ${
                          item.inStock 
                            ? 'bg-nepal-red hover:bg-nepal-crimson' 
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                        size="sm"
                        disabled={!item.inStock}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

    </div>
  );
};

export default Wishlist;
