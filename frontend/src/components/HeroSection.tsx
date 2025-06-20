
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-nepal-red via-purple-600 to-nepal-blue min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm opacity-90">Trusted by 50,000+ Nepali families</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Nepal's
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                Premier
              </span>
              E-commerce Platform
            </h1>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover authentic Nepali products, international brands, and unbeatable deals. 
              From Kathmandu to every corner of Nepal - we deliver excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-white text-nepal-red hover:bg-gray-200 font-semibold px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button size="lg" variant="outline" className="border-white text-nepal-red font-semibold px-8">
                Explore Categories
              </Button> */}
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>7-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Products */}
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg mb-4"></div>
                  <h3 className="text-white font-semibold">Electronics</h3>
                  <p className="text-white/70 text-sm">Latest gadgets</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4"></div>
                  <h3 className="text-white font-semibold">Fashion</h3>
                  <p className="text-white/70 text-sm">Trending styles</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg mb-4"></div>
                  <h3 className="text-white font-semibold">Local Products</h3>
                  <p className="text-white/70 text-sm">Made in Nepal</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-red-500 rounded-lg mb-4"></div>
                  <h3 className="text-white font-semibold">Home & Living</h3>
                  <p className="text-white/70 text-sm">Comfort zone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
